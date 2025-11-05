import { useState } from "react";
import type { ErrorResponse, Movie } from "../types/movie";
import { searchMovies } from "../services/movieService";

const useMoviesBySearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const onSeachMovies = async (query: string = "", page: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      if (query) {
        const data = await searchMovies(query, page);
        setMovies((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      }
    } catch (err) {
      setError(err as ErrorResponse);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, onSeachMovies };
};

export default useMoviesBySearch;
