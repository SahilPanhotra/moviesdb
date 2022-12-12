import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
library.add(faMagnifyingGlass);

function App() {
  
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
