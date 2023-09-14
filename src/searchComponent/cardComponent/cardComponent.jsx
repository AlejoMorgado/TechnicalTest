import React, { useState, useEffect } from "react";
import "./cardComponent.css";
import favoriteIcon from "../../assets/favorite.png";
import removeIcon from "../../assets/remove.png";

const CardComponent = ({
  username,
  professionalHeadline,
  picture,
  name,
  onFavoriteClick,
  handleRemoveFavorite,
  favorites,
}) => {
  const shortenedHeadline =
    professionalHeadline.length > 100
      ? professionalHeadline.substring(0, 50) + "..."
      : professionalHeadline;

  const [isFavorite, setIsFavorite] = useState(false);

  // Use useEffect to update isFavorite when favorites change
  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.username === username));
  }, [favorites, username]);

  const handleClick = () => {
    const bioURL = `https://bio.torre.co/${username}`;
    window.open(bioURL, "_blank");
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      // Si ya es favorito, elimínalo de la lista de favoritos
      handleRemoveFavorite(username);
    } else {
      // Si no es favorito, agrégalo a la lista de favoritos
      onFavoriteClick({ username, name, picture });
    }
  };

  return (
    <div className="cardContainer">
      <div
        className={`card ${isFavorite ? "favorite" : ""}`}
        onClick={handleClick}
      >
        <img
          className="profilePicture"
          src={picture}
          alt={`${username}'s profile`}
        />
        <div className="cardDescription">
          <h3 className="userName">{name}</h3>
          <p className="userHeadline">{shortenedHeadline}</p>
        </div>
      </div>
      <button className="iconButtons" onClick={handleFavoriteClick}>
        {isFavorite ? (
          <img className="icons" src={removeIcon} alt="Remove from Favorites" />
        ) : (
          <img className="icons" src={favoriteIcon} alt="Add to Favorites" />
        )}
      </button>
    </div>
  );
};

export default CardComponent;
