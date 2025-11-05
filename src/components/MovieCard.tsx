import React, { useState } from "react";
import type { Movie } from "../types/movie";
import { NavLink } from "react-router-dom";

interface Props {
  movie: Movie;
}
const MovieCard: React.FC<Props> = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const movieDetailUrl = `/movie/${movie.id}`;

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {poster && (
          <NavLink to={movieDetailUrl}>
            <img
              src={poster}
              alt={movie.title}
              onLoad={() => setLoaded(true)}
              loading="lazy"
            />
          </NavLink>
        )}
        {!loaded && <div className="poster-skeleton" />}
      </div>
      <div className="movie-info">
        <NavLink to={movieDetailUrl}>
          <h3 className="movie-title">{movie.title}</h3>
        </NavLink>
        <p className="movie-released-date">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
