import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
   <div className="img-container">
        <img alt={props.name} src={props.image} />

      <span onClick={() => props.removeFriend(props.id)} className="remove"></span>
      </div>
    </div>
  );
}

export default CharacterCard;
