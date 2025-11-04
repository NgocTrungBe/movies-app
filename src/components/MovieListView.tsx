import React from "react";
import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const MovieListView: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movie-list-view">
      {movies && movies.length ? (
        movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <></>
      )}
    </ul>
  );
};

export default MovieListView;
