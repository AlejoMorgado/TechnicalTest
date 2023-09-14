import React, { useState } from "react";
import { performSearch } from "./searchComponentHelper";
import CardComponent from "./cardComponent/cardComponent.jsx";
import "./searchBar.css";
import searchIcon from "../assets/searchIcon.png"

const SearchBar = ({onFavoriteClick, handleRemoveFavorite, favorites}) => {
  const [query, setQuery] = useState("");
  const [personCards, setPersonCards] = useState([]);
 

  const handleCardClick = (username) => {
    console.log("Username clickeado:", username);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payloadData = {
      excludeContacts: true,
      excludedPeople: [],
      identityType: "person",
      limit: 10,
      meta: false,
      query: query,
      torreGgId: "1431772",
    };

    try {
      const response = await performSearch(payloadData);
      const responseData = response.data;
      const jsonResponseArray = responseData.split("\n");
      const nonEmptyJsonResponseArray = jsonResponseArray.filter(
        (item) => item.trim() !== ""
      );
      const mappedArray = nonEmptyJsonResponseArray.map((item) =>
        JSON.parse(item)
      );
      console.log(mappedArray);
      const personCards = mappedArray.map((person, index) => (
        <CardComponent
          key={index}
          name={person.name}
          professionalHeadline={person.professionalHeadline}
          picture={person.imageUrl}
          username={person.username}
          onClick={handleCardClick}
          onFavoriteClick={onFavoriteClick}
          handleRemoveFavorite={handleRemoveFavorite}
          favorites={favorites}
        />
      ));

      setPersonCards(personCards);
    } catch (error) {
      console.error("Error en la solicitud a la API:", error.message);
    }
  };
  return (
    <div className="searchContainer">
      <form className="form" onSubmit={handleSubmit}>
        <div className="searchBarContainer">
          <input
            className="searchBar"
            type="search"
            id="default-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search people by name"
            required
          />
          <button type="submit" className="searchButton">
            <img className="searchIcon" src={searchIcon} alt="search icon" />
          </button>
        </div>
      </form>
      <div className="cardsContainer">{personCards}</div>
    </div>
  );
};

export default SearchBar;
