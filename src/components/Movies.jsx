import { useMovies } from "../main";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  const { displayMovies } = useMovies();

  return (
    <div className="flex flex-wrap gap-24 p-5">
      {displayMovies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
