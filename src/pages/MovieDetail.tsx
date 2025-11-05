import { useParams } from "react-router";
import useMovieDetail from "../hooks/useMovieDetail";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrrorState";

const MovieDetail: React.FC = () => {
  const { id } = useParams();
  const { movieDetail, loading, error } = useMovieDetail(id as string);

  const backdrop = `https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`;

  const genres = movieDetail?.genres.map((item) => item.name).join(", ");
  const country = movieDetail?.production_countries
    .map((item) => item.iso_3166_1)
    .join(", ");

  const languages = movieDetail?.spoken_languages
    .map((item) => item.english_name)
    .join(", ");

  return (
    <div className="movie-detail">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorState message={error.status_message} />
      ) : (
        <>
          <section className="movie-backdrop">
            <img
              src={backdrop}
              alt={movieDetail?.original_title}
              loading="lazy"
            />

            <div className="movie-intro">
              <div className="movie-poster">
                <img
                  src={poster}
                  alt={movieDetail?.original_title}
                  loading="lazy"
                />
              </div>
              <div className="content">
                <h2 className="movie-title">{movieDetail?.title}</h2>
                <button className="watch-button" disabled>
                  Watch
                </button>
              </div>
            </div>
          </section>
          <section className="movie-desc">
            <p className="runtime">
              <b>Runtime:</b> {movieDetail?.runtime + " " + "min"}
            </p>
            <p className="release-date">
              <b>Release_date:</b> {movieDetail?.release_date}
            </p>
            <p className="genres">
              <b>Genres:</b> {genres}
            </p>

            <p className="languages">
              <b>languages:</b> {languages}
            </p>
            <p className="genres">
              <b>Country:</b> {country}
            </p>
          </section>

          <section className="movie-overview">
            <h3>Overview:</h3>
            <p>{movieDetail?.overview}</p>
          </section>

          <section className="movie-overview">
            <h3>Tags:</h3>
            <p>{movieDetail?.tagline}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
