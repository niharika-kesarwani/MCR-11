import { useNavigate, useLocation } from "react-router-dom";
import { useMovies } from "../contexts/movies-context";
import { moviesConstants } from "../constants/movies-constants";

export const Header = () => {
  const { setMovies } = useMovies();
  const navigate = useNavigate();
  const location = useLocation();
  const headerTabs = [
    { name: "Movies", route: "/" },
    { name: "Watchlist", route: "/watchlist" },
    { name: "Starred Movies", route: "/starred" },
  ];

  const { SET_SEARCH_FILTER } = moviesConstants;

  return (
    <div className="flex items-center justify-between bg-black p-5 text-white opacity-70">
      <div
        className="text-xl font-bold hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        IMDB
      </div>
      <input
        type="text"
        placeholder="Search movies by title, cast and director..."
        className="w-96 rounded-md p-2 text-black"
        onChange={(e) => {
          setMovies({ type: SET_SEARCH_FILTER, payload: e.target.value });
          navigate("/");
        }}
      />
      <div className="flex gap-5">
        {headerTabs.map(({ name, route }, index) => {
          const onSameRoute = location.pathname === route;
          return (
            <div
              className={`hover:cursor-pointer ${onSameRoute && "font-bold"}`}
              onClick={() => navigate(route)}
              key={index}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
