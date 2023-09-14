import React from "react";
import removeIcon from "../assets/remove.png";
import "./favoritesComponent.css";
const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  console.log(favorites);
  return (
    <div>
      <div className="favoritesContainer">
        {favorites.map((favorite, index) => (
          <div className="favoriteContainer">
            <span className="name" key={index}>
              {favorite.name}
              <button className="iconButton" onClick={() => onRemoveFavorite(index)}>
              <img className="icons"  src={removeIcon} />
            </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
