import { useState } from "react";
import { moviesConstants } from "../constants/movies-constants";
import { useMovies } from "../main";
import { v4 as uuid } from "uuid";

export const AddMovieModal = () => {
  const { setMovies, buttonClassName, allReleaseYears, allRatings } =
    useMovies();
  const inputClassName = "border-2 border-black p-2 w-full";
  const { SET_SHOW_ADD_MOVIE_MODAL, ADD_MOVIE } = moviesConstants;
  const [formDetails, setFormDetails] = useState({
    id: "",
    title: "",
    year: 1990,
    genre: [],
    rating: 1,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setMovies({
      type: ADD_MOVIE,
      payload: {
        ...formDetails,
        id: uuid(),
        genre: formDetails.genre
          .replaceAll(" ", "")
          .split(",")
          .map((item) => item[0].toUpperCase() + item.slice(1)),
        cast: formDetails.cast.split(","),
      },
    });
    setMovies({ type: SET_SHOW_ADD_MOVIE_MODAL, payload: false });
  };

  const handleFormChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="m-3 flex max-h-screen w-full max-w-xl flex-col justify-between gap-3 overflow-y-auto rounded-lg bg-white p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-xl font-bold">Add Movie</div>
      <form onSubmit={formSubmitHandler} className="flex flex-col gap-3">
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          required
        />
        <label>Summary</label>
        <input
          type="text"
          name="summary"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          required
        />
        <div className="flex justify-between gap-3">
          <div className="flex w-full flex-col gap-3">
            <label>Year</label>
            <select
              name="year"
              className={inputClassName}
              onChange={(e) => handleFormChange(e)}
              defaultValue={1990}
              required
            >
              {allReleaseYears?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col gap-3">
            <label>Rating</label>
            <select
              name="rating"
              className={inputClassName}
              onChange={(e) => handleFormChange(e)}
              defaultValue={1}
              required
            >
              {allRatings?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label>Cast</label>
        <input
          type="text"
          name="cast"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          placeholder="Enter multiple cast separated by commas..."
          required
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          placeholder="Enter multiple genres separated by commas..."
          required
        />

        <label>Director</label>
        <input
          type="text"
          name="director"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          required
        />
        <label>Writer</label>
        <input
          type="text"
          name="writer"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          placeholder="Enter multiple writers separated by commas..."
          required
        />
        <label>Image URL</label>
        <input
          type="url"
          name="imageURL"
          onChange={(e) => handleFormChange(e)}
          className={inputClassName}
          required
        />
        <button type="submit" className={`${buttonClassName} mt-5`}>
          Submit
        </button>
      </form>
    </div>
  );
};
