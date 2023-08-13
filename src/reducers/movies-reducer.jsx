/* eslint-disable no-case-declarations */
import { movies } from "../data/movies-data";
import { moviesConstants } from "../constants/movies-constants";

const {
  SET_MOVIES,
  SET_GENRE_FILTER,
  SET_RELEASE_YEAR_FILTER,
  SET_RATING_FILTER,
  SET_SHOW_ADD_MOVIE_MODAL,
  ADD_MOVIE,
} = moviesConstants;

export const moviesReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload };
    case SET_GENRE_FILTER:
      return { ...state, genreFilter: payload };
    case SET_RELEASE_YEAR_FILTER:
      return { ...state, releaseYearFilter: payload };
    case SET_RATING_FILTER:
      return { ...state, ratingFilter: payload };
    case SET_SHOW_ADD_MOVIE_MODAL:
      return { ...state, showAddMovieModal: payload };
    case ADD_MOVIE:
      const updatedMovies = [...state.movies, payload];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return { ...state, movies: updatedMovies };
    default:
      return state;
  }
};

export const initialMovies = {
  movies: movies,
  genreFilter: "All Genre",
  releaseYearFilter: "Release Year",
  ratingFilter: "Rating",
  showAddMovieModal: false,
};
