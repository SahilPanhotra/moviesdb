import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faSpinner,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import axios from "axios";
import MovieInfo from "./pages/MovieInfo";
library.add(faMagnifyingGlass, faSpinner, faArrowLeft);

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSearchChange(value) {
    setSearch(value);
  }
  async function handleSearch() {
    try {
      setLoading(true);
      if (search === "") {
        setLoading(false);
        setError("Nothing to Search");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      const result = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=670cf342`
      );
      const { data } = await result;
      setMovies(data.Search);
      setLoading(false);
      navigate(`/movies`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log(movies);
    if (search === "") {
      setMovies([]);
    }
  }, [search]);

  return (
    <>
      <NavBar
        error={error}
        search={search}
        handleSearchChange={handleSearchChange}
        loading={loading}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              error={error}
              search={search}
              handleSearchChange={handleSearchChange}
              loading={loading}
              handleSearch={handleSearch}
            />
          }
        ></Route>
        <Route
          path="/movies"
          element={<Movies error={error} search={search} movies={movies} />}
        ></Route>
        <Route path="/movies/:id" element={<MovieInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
