import { useState } from "react";
import Tab from "../components/Tab";
import type { MovieType } from "../types/movie";
import MovieListView from "../components/MovieListView";
import { useMovies } from "../hooks";
import SegmentedControl from "../components/SegmentedControl";
import type { SegmentType } from "../types/segment";
import MovieGridView from "../components/MovieGridView ";
import { NoData } from "../components/NoData";
import { ErrorState } from "../components/ErrrorState";
import Loading from "../components/Loading";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("now_playing");
  const [viewMode, setViewMode] = useState<string>("list");
  const { movies, loading, error } = useMovies(activeTab as MovieType);
  const handleChangeTab = (type: string) => {
    setActiveTab(type as MovieType);
  };

  const handleChangeViewMode = (mode: string) => {
    setViewMode(mode as SegmentType);
  };

  return (
    <div className="home">
      <section className="movie-section">
        <div className="heading">
          <h2 className="heading-title">Movie List</h2>
          <Tab type={activeTab} onchange={handleChangeTab} />
        </div>
        {movies.length > 0 && (
          <div className="control">
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
