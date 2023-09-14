import React from "react";
import "./cardComponent.css"

const CardComponent = ({ username, professionalHeadline, picture }) => {
  const shortenedHeadline =
    professionalHeadline.length > 100
      ? professionalHeadline.substring(0, 50) + "..." 
      : professionalHeadline; 

      const handleClick = () => {
        const bioURL = `https://bio.torre.co/${username}`;
        window.open(bioURL, "_blank");
      };

  return (
    <div className="card" onClick={handleClick}>
      <img className="profilePicture" src={picture} alt={`${username}'s profile`} />
      <div className="cardDescription">
        <p className="userHeadline">{shortenedHeadline}</p>
      </div>
    </div>
  );
};

export default CardComponent;
