import { useMovies } from "../main";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  const { displayMovies } = useMovies();

  if (displayMovies.length === 0) {
    return <div className="p-5 text-xl font-bold">No Movies!</div>;
  }

  return (
    <div className="flex flex-wrap gap-24 p-5">
      {displayMovies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} homePage />
      ))}
    </div>
  );
};
