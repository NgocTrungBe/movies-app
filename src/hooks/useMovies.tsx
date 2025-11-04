import { useEffect, useState } from "react";
import type { ErrorResponse, Movie, MovieType } from "../types/movie";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  searchMovies,
} from "../services/movieService";

export const useMovies = (
  type: MovieType,
  page: number = 1,
  query: string = ""
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (query) {
          data = await searchMovies(query, page);
        } else {
          data =
            type === "now_playing"
              ? await fetchNowPlayingMovies(page)
              : await fetchTopRatedMovies(page);
        }
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
  }, [type, page, query]);

  return { movies, loading, error };
};
