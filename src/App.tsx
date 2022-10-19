import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Category from "./components/CategorySection/CategorySection";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import SearchInput from "./components/SearchInput/SearchInput";
import VotesModal from "./components/VotesModal/VotesModal";
import { useFetchMovies } from "./hooks/useFetchMovies";
import { useAppSelector } from "./redux/hooks/hooks";
import { getMovieCategories } from "./utils/movies";

function App() {
  const selectedMovies = useAppSelector((state) => state.moviesSelected.movies);

  const [searchInput, setSearchInput] = useState<string>("");
  const [isModalOpen, setModal] = useState<boolean>(false);

  const { movies, isMoviesLoading } = useFetchMovies();

  let movieCategories: string[] | undefined;
  if (movies.length > 0) {
    movieCategories = getMovieCategories(movies);
  }

  const getMoviesByCategory = (category: string) => {
    return movies
      .filter((movie) => movie.category === category)
      .filter((movie) =>
        movie.title
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  return (
    <>
      <VotesModal isModalOpen={isModalOpen} setModal={setModal} />
      <main className="App">
        <div>
          <h1>Movie Awards</h1>
          <SearchInput setSearchInput={setSearchInput} />

          {isMoviesLoading && <LoadingSpinner />}

          {movieCategories &&
            movieCategories.map((category) => (
              <Category
                key={category}
                title={category}
                movies={getMoviesByCategory(category)}
              />
            ))}

          {movies.length > 0 && selectedMovies.length > 0 && (
            <div className="btn_wrapper">
              <Button handleOnClick={() => setModal(true)}>SUBMIT VOTES</Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default App;
