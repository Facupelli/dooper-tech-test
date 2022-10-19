import { useEffect, useState } from "react";
import { Movie } from "../types";
import { fetchMovies } from "../utils/movies";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isMoviesLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then((movies) => setMovies(movies.movies))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { movies, isMoviesLoading };
};
