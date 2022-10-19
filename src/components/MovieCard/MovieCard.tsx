import { Movie } from "../../types";
import Button from "../Button/Button";

import s from "./MovieCard.module.css";

type Props = {
  movie: Movie;
  selectedMovies: Movie[];
  handleSelectClick: (movie: Movie) => void;
};

export default function MovieCard({
  movie,
  selectedMovies,
  handleSelectClick,
}: Props) {
  const isMovieSelected = selectedMovies.find(
    (selectedMovie) => selectedMovie.title === movie.title
  );

  return (
    <article
      className={`${s.card_container} ${isMovieSelected ? s.selected : ""}`}
    >
      <p>{movie.title}</p>
      <img className={s.movie_img} src={movie.photoUrL} alt={movie.title} />
      <Button handleOnClick={() => handleSelectClick(movie)}>
        {isMovieSelected ? "selected" : "select"}
      </Button>
    </article>
  );
}
