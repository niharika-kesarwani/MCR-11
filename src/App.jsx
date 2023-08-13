import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { Watchlist } from "./pages/Watchlist";
import { Starred } from "./pages/Starred";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:ID" element={<MovieDetail />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
      </Routes>
    </div>
  );
}

export default App;
