import React from "react";
import "./css/albumCard.css";

function AlbumCard(props) {
  return <div>{props.album.name}</div>;
}

export default AlbumCard;
