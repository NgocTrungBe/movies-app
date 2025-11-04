import React from "react";
import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const MovieGridView: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movie-grid-view">
      {movies && movies.length ? (
        movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <></>
      )}
    </ul>
  );
};

export default MovieGridView;
