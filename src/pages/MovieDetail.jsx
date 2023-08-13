import { useParams } from "react-router-dom";
import { useMovies } from "../main";

export const MovieDetail = () => {
  const { ID } = useParams();
  const {
    movies: { movies },
  } = useMovies();

  const selectedMovie = movies?.find(({ id }) => id == ID);

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
  } = selectedMovie;
  const { buttonClassName } = useMovies();

  return (
    <div className="mx-20 my-10 flex h-[30rem] gap-5 rounded-xl bg-gray-100 p-5">
      <div className="w-1/3">
        <img
          src={imageURL}
          className="h-full w-full rounded-l-xl object-cover"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between">
        <div className="text-2xl font-bold">{title}</div>
        <div>{summary}</div>
        <div>Year: {year}</div>
        <div>Genre: {genre.join(", ")}</div>
        <div>Rating: {rating}</div>
        <div>Writer: {writer}</div>
        <div>Cast: {cast.join(", ")}</div>
        <div className="flex justify-between">
          <div className={buttonClassName}>Star</div>
          <div className={buttonClassName}>Add to Watchlist</div>
        </div>
      </div>
    </div>
  );
};
