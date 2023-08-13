/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useMovies } from "../main";
import { moviesConstants } from "../constants/movies-constants";

export const MovieCard = ({ movie, homePage, starPage, watchlistPage }) => {
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
    star,
    watchlist,
  } = movie;
  const navigate = useNavigate();
  const { setMovies, buttonClassName } = useMovies();

  const { HANDLE_STAR_MOVIE, HANDLE_WATCHLIST_MOVIE } = moviesConstants;

  return (
    <div
      className="flex h-[35rem] w-80 flex-col overflow-hidden rounded-lg border-2 border-black hover:cursor-pointer"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="h-2/3">
        <img src={imageURL} className="h-full w-full object-cover" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 p-2 text-center">
        <div className="text-lg font-bold">{title}</div>
        <div className="line-clamp-4">{summary}</div>
        <div className="flex gap-5">
          <div
            className={buttonClassName}
            onClick={(e) => {
              e.stopPropagation();
              homePage
                ? !star &&
                  setMovies({ type: HANDLE_STAR_MOVIE, payload: movie })
                : starPage
                ? setMovies({ type: HANDLE_STAR_MOVIE, payload: movie })
                : !star &&
                  setMovies({ type: HANDLE_STAR_MOVIE, payload: movie });
            }}
          >
            {star ? (homePage || watchlistPage ? "Starred" : "Unstar") : "Star"}
          </div>
          <div
            className={buttonClassName}
            onClick={(e) => {
              e.stopPropagation();
              homePage
                ? !watchlist &&
                  setMovies({ type: HANDLE_WATCHLIST_MOVIE, payload: movie })
                : watchlistPage
                ? setMovies({ type: HANDLE_WATCHLIST_MOVIE, payload: movie })
                : !watchlist &&
                  setMovies({ type: HANDLE_WATCHLIST_MOVIE, payload: movie });
            }}
          >
            {watchlist
              ? homePage || starPage
                ? "Added to Watchlist"
                : "Remove from Watchlist"
              : "Add to Watchlist"}
          </div>
        </div>
      </div>
    </div>
  );
};
