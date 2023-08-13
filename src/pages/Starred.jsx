import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../main";

export const Starred = () => {
  const { allStarredMovies } = useMovies();

  if (allStarredMovies.length === 0) {
    return <div className="p-5 text-xl font-bold">No Starred Movies!</div>;
  }

  return (
    <div className="p-5">
      <div className="text-2xl font-bold">Starred Movies</div>
      <div className="flex flex-wrap gap-24 p-5">
        {allStarredMovies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} starPage />
        ))}
      </div>
    </div>
  );
};
