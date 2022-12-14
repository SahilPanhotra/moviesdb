import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass , faSpinner } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import axios from "axios";
library.add(faMagnifyingGlass , faSpinner);


function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSearchChange(value) {
    setSearch(value);
  }
   async function handleSearch() {
    
    try {
      setLoading(true);
      const result = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=670cf342`);
      const {data} = await result;
      setMovies(data.Search);
      console.log(data.Search[0].Title); 
      setLoading(false);
      navigate(`/movies`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    
    console.log(movies);
  }, [movies])
  
  return (
    <>
      
        <NavBar search={search} handleSearchChange={handleSearchChange} loading={loading} handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} handleSearchChange={handleSearchChange} loading={loading} handleSearch={handleSearch}/> }></Route>
          <Route path="/movies" element={<Movies search={search} movies={movies}/>}></Route>
        </Routes>
    
    </>
  );
}

export default App;
