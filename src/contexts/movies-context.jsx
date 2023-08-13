/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { moviesReducer, initialMovies } from "../reducers/movies-reducer";
import { movies as originalMovies } from "../data/movies-data";
import { moviesConstants } from "../constants/movies-constants";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useReducer(moviesReducer, initialMovies);

  const { SET_MOVIES } = moviesConstants;
  const { searchFilter, genreFilter, releaseYearFilter, ratingFilter } = movies;
  const allMovies = movies.movies;

  const allGenres = allMovies.reduce(
    (final, { genre }) => [
      ...final,
      ...genre.filter((item) => !final.includes(item)),
    ],
    []
  );

  const allReleaseYears = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003,
  ];

  const allRatings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const searchFilteredMovies =
    searchFilter === ""
      ? allMovies
      : allMovies?.filter(
          ({ title, cast, director }) =>
            title.toLowerCase().includes(searchFilter.toLowerCase()) ||
            director.toLowerCase().includes(searchFilter.toLowerCase()) ||
            cast.some((item) =>
              item.toLowerCase().includes(searchFilter.toLowerCase())
            )
        );

  const genreFilteredMovies =
    genreFilter === "All Genre"
      ? searchFilteredMovies
      : searchFilteredMovies.filter(({ genre }) => genre.includes(genreFilter));

  const releaseYearFilteredMovies =
    releaseYearFilter === "Release Year"
      ? genreFilteredMovies
      : genreFilteredMovies?.filter(({ year }) => year == releaseYearFilter);

  const ratingFilteredMovies =
    ratingFilter === "Rating"
      ? releaseYearFilteredMovies
      : releaseYearFilteredMovies?.filter(
          ({ rating }) => rating == ratingFilter
        );

  const buttonClassName =
    "rounded-md border-2 bg-black px-2 py-1 text-white opacity-70 hover:cursor-pointer hover:opacity-60";

  useEffect(() => {
    const localStorageMovies = localStorage.getItem("movies");
    if (localStorageMovies) {
      setMovies({ type: SET_MOVIES, payload: JSON.parse(localStorageMovies) });
    } else {
      localStorage.setItem("movies", JSON.stringify(originalMovies));
      setMovies({ type: SET_MOVIES, payload: originalMovies });
    }
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        allGenres,
        allReleaseYears,
        allRatings,
        displayMovies: ratingFilteredMovies,
        buttonClassName,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
