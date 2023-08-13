/* eslint-disable react/prop-types */
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
  const buttonClassName =
    "rounded-md border-2 bg-black px-2 py-1 text-white opacity-70 hover:cursor-pointer hover:opacity-60";

  return (
    <div className="flex h-[35rem] w-72 flex-col overflow-hidden rounded-lg border-2 border-black">
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
