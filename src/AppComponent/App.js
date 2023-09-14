import "./App.css";
import SearchBar from "../searchComponent/searchBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navigationMenu">
          <nav>
            <span>
              <Link to="/ruta1">Search</Link>
            </span>
          </nav>
        </div>
        <Routes>
          <Route path="/ruta1" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
