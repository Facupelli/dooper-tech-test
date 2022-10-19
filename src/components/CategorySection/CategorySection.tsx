import { Movie } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import { setMoviesSelected } from "../../redux/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import s from "./CategorySection.module.css";

type Props = {
  title?: string;
  movies?: Movie[];
};

export default function CategorySection({ title, movies }: Props) {
  const dispatch = useAppDispatch();

  const selectedMovies: Movie[] = useAppSelector(
    (state) => state.moviesSelected.movies
  );

  const handleSelectClick = (movie: Movie) => {
    const movieFromSameCategory = selectedMovies.find(
      (selectedMovie) => selectedMovie?.category === movie.category
    );

    if (movieFromSameCategory) {
      const newSelectedMovies = selectedMovies.filter(
        (selectedMovie) => selectedMovie.category !== movie.category
      );
      dispatch(setMoviesSelected([...newSelectedMovies, movie]));
    } else {
      dispatch(setMoviesSelected([...selectedMovies, movie]));
    }
  };

  if (!movies || movies?.length <= 0) {
    return null;
  }

  return (
    <section className={s.section_container}>
      <h1>{title}</h1>
      <div>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleSelectClick={handleSelectClick}
            selectedMovies={selectedMovies}
          />
        ))}
      </div>
    </section>
  );
}
