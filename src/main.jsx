import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MoviesProvider, useMovies } from "./contexts/movies-context.jsx";

export { useMovies };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </Router>
  </React.StrictMode>
);
