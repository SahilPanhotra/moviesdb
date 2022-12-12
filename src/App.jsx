import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
