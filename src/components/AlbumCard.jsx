import React from "react";
import "./css/albumCard.css";
import { shortText } from "limit-text-js";

function AlbumCard(props) {
  return (
    <div className="albumCard">
      <h5>{shortText(props.album.name, 30, "...")}</h5>
      <img src={props.album.images[0].url} alt="img album" />
      {/* <p>{props.album.release_date}</p> */}
    </div>
  );
}

export default AlbumCard;
