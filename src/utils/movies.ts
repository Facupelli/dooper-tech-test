import { Movie } from "../types";

export const fetchMovies = () => {
  return fetch("http://localhost:8080/api/movies").then((res) => res.json());
};

export const getMovieCategories = (movies: Movie[]) => {
  const movieCategories = new Set<string>();

  movies.map((movie) => {
    return movieCategories.add(movie.category);
  });

  return Array.from(movieCategories);
};
