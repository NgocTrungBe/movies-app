import { useState } from "react";
import Tab from "../components/Tab";
import type { MovieType } from "../types/movie";
import MovieListView from "../components/MovieListView";
import SegmentedControl from "../components/SegmentedControl";
import type { SegmentType } from "../types/segment";
import MovieGridView from "../components/MovieGridView ";
import NoData from "../components/NoData";
import ErrorState from "../components/ErrrorState";
import Loading from "../components/Loading";

import { useMoviesByTab } from "../hooks";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MovieType>("now_playing");
  const [viewMode, setViewMode] = useState<SegmentType>("list");
  // const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    movies: tabMovies,
    loading: tabLoading,
    error: tabError,
  } = useMoviesByTab(activeTab as MovieType);

  // Temporarily disabling search functionality.
  // Will re-enable useMoviesBySearch hook to handle search queries later.

  // const {
  //   movies: searchMovies,
  //   loading: searchLoading,
  //   error: searchError,
  //   onSeachMovies,
  // } = useMoviesBySearch();

  const handleChangeTab = (type: string) => {
    setActiveTab(type as MovieType);
  };

  const handleChangeViewMode = (mode: string) => {
    setViewMode(mode as SegmentType);
  };

  // TODO: Add searchQuery logic to toggle between tabMovies and searchMovies
  const movies = tabMovies;
  const loading = tabLoading;
  const error = tabError;
  //

  return (
    <div className="home">
      <section className="movie-section">
        <div className="heading">
          <h2 className="heading-title">Movie List</h2>
          <Tab type={activeTab} onchange={handleChangeTab} />
        </div>
        {movies.length > 0 && (
          <div className="control">
            {/* TODO: Complete search functionality (debounce, API call) */}
            {/* <Search
              value={searchQuery}
              onClick={() => {}}
              // onClick={onSeachMovies}
              onChange={(query: string) => setSearchQuery(query)}
            /> */}

            <SegmentedControl
              options={["list", "grid"]}
              selected={viewMode}
              onChange={handleChangeViewMode}
            />
          </div>
        )}

        <div className="movie-area">
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorState message={error.status_message} />
          ) : movies.length === 0 ? (
            <NoData />
          ) : viewMode === "list" ? (
            <MovieListView movies={movies} />
          ) : (
            <MovieGridView movies={movies} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
