import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../searchComponent/searchBar";
import FavoritesList from "../favoritesComponent/favoritesComponent";

function App() {
  const [favorites, setFavorites] = useState([]);
  const handleAddFavorite = (favorite) => {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  };
  const handleRemoveFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };
  return (
    <div className="App">
      <div className="header">
        <p className="title">Torre.<span className="ai">ai</span></p>
      </div>
      <Router>
        <div className="navigationMenu">
          <div className="routesWrapper">
            <div id="routesContainer">
              <span>
                <Link id="routesLinks" to="/searchUser">
                  SEARCH
                </Link>
              </span>
            </div>
            <div id="routesContainer">
              <span>
                <Link id="routesLinks" to="/favorites">
                  FAVORITES
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/searchUser"
            element={<SearchBar onFavoriteClick={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite} favorites={favorites}/>}
          />
          <Route
            path="/favorites"
            element={
              <FavoritesList
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
