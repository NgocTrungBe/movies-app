import React, { useState } from "react";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}
const MovieCard: React.FC<Props> = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {poster && (
          <img
            src={poster}
            alt={movie.title}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        )}
        {!loaded && <div className="poster-skeleton" />}
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-released-date">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
