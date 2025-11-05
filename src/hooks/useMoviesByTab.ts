import { useEffect, useState } from "react";
import type { ErrorResponse, Movie, MovieType } from "../types/movie";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
} from "../services/movieService";

const useMoviesByTab = (type: MovieType, page: number = 1) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data =
          type === "now_playing"
            ? await fetchNowPlayingMovies(page)
            : await fetchTopRatedMovies(page);

        setMovies((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (err) {
        setError(err as ErrorResponse);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [type, page]);

  return { movies, loading, error };
};

export default useMoviesByTab;
