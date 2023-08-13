import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { Watchlist } from "./pages/Watchlist";
import { Starred } from "./pages/Starred";
import { moviesConstants } from "./constants/movies-constants";
import { useMovies } from "./main";
import { AddMovieModal } from "./modals/AddMovieModal";

function App() {
  const {
    movies: { showAddMovieModal },
    setMovies,
  } = useMovies();

  const { SET_SHOW_ADD_MOVIE_MODAL } = moviesConstants;

  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:ID" element={<MovieDetail />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
      </Routes>
      {showAddMovieModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
          onClick={() =>
            setMovies({ type: SET_SHOW_ADD_MOVIE_MODAL, paylaod: false })
          }
        >
          <AddMovieModal />
        </div>
      )}
    </div>
  );
}

export default App;
