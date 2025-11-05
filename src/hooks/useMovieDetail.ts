import { useEffect, useState } from "react";
import type { ErrorResponse, MovieDetail } from "../types/movie";
import { fetchMovieDetails } from "../services/movieService";

const useMovieDetail = (id: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const data = await fetchMovieDetails(Number(id));
          if (data) setMovieDetail(data);
        }
      } catch (err) {
        setError(err as ErrorResponse);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [id]);

  return { movieDetail, loading, error };
};

export default useMovieDetail;
