import React from "react";
import { resetMovies } from "../../redux/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Movie } from "../../types";
import Button from "../Button/Button";

import s from "./VotesModal.module.css";

type Props = {
  isModalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function VotesModal({ isModalOpen, setModal }: Props) {
  const dispatch = useAppDispatch();

  const moviesSlected: Movie[] = useAppSelector(
    (state) => state.moviesSelected.movies
  );

  const handleCloseModal = () => {
    dispatch(resetMovies());
    setModal(false);
  };

  return (
    <dialog open={isModalOpen} className={s.modal}>
      <h1>VOTES SUBMITTED</h1>
      <ul>
        {moviesSlected.map((movie) => (
          <li key={movie.category}>
            <p>
              {movie.category} - <strong>{movie.title}</strong>
            </p>
          </li>
        ))}
      </ul>
      <div className={s.btn_wrapper}>
        <Button handleOnClick={handleCloseModal}>Close</Button>
      </div>
    </dialog>
  );
}
