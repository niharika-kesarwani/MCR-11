/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useMovies } from "../main";

export const MovieCard = ({ movie }) => {
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
  } = movie;
  const navigate = useNavigate();
  const { buttonClassName } = useMovies();

  return (
    <div
      className="flex h-[35rem] w-72 flex-col overflow-hidden rounded-lg border-2 border-black hover:cursor-pointer"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="h-2/3">
        <img src={imageURL} className="h-full w-full object-cover" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 p-2 text-center">
        <div className="text-lg font-bold">{title}</div>
        <div className="line-clamp-4">{summary}</div>
        <div className="flex gap-5">
          <div className={buttonClassName}>Star</div>
          <div className={buttonClassName}>Add to Watchlist</div>
        </div>
      </div>
    </div>
  );
};
