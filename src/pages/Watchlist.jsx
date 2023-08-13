import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../main";

export const Watchlist = () => {
  const { allWatchlistedMovies } = useMovies();

  if (allWatchlistedMovies.length === 0) {
    return <div className="p-5 text-xl font-bold">No Watchlisted Movies!</div>;
  }

  return (
    <div className="p-5">
      <div className="text-2xl font-bold">Watchlisted Movies</div>
      <div className="flex flex-wrap gap-24 p-5">
        {allWatchlistedMovies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
