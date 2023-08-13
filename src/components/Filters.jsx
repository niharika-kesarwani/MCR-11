import { moviesConstants } from "../constants/movies-constants";
import { useMovies } from "../main";

export const Filters = () => {
  const { setMovies, allGenres, allReleaseYears, allRatings } = useMovies();

  const displayGenres = ["All Genre", ...allGenres];
  const displayReleaseYears = ["Release Year", ...allReleaseYears];
  const displayRatings = ["Rating", ...allRatings];

  const {
    SET_GENRE_FILTER,
    SET_RELEASE_YEAR_FILTER,
    SET_RATING_FILTER,
    SET_SHOW_ADD_MOVIE_MODAL,
  } = moviesConstants;

  return (
    <div className="flex items-center justify-between p-5">
      <div className="text-xl font-bold">Movies</div>
      <select
        className="border-2 border-black px-5 py-2"
        onChange={(e) =>
          setMovies({ type: SET_GENRE_FILTER, payload: e.target.value })
        }
      >
        {displayGenres?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        className="border-2 border-black px-5 py-2"
        onChange={(e) =>
          setMovies({ type: SET_RELEASE_YEAR_FILTER, payload: e.target.value })
        }
      >
        {displayReleaseYears?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        className="border-2 border-black px-5 py-2"
        onChange={(e) =>
          setMovies({ type: SET_RATING_FILTER, payload: e.target.value })
        }
      >
        {displayRatings?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button
        className="rounded-md bg-black px-5 py-2 text-white opacity-70 hover:cursor-pointer hover:opacity-60"
        onClick={() =>
          setMovies({ type: SET_SHOW_ADD_MOVIE_MODAL, payload: true })
        }
      >
        Add a Movie
      </button>
    </div>
  );
};
