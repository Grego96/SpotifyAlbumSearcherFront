import React from "react";
import "./css/searcher.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";

function Searcher() {
  const [albums, setAlbums] = useState([]);
  const [inputName, setInputName] = useState("");
  const [artistName, setArtistName] = useState("");

  async function getAlbums(artistName) {
    try {
      const result = await axios({
        method: "GET",
        baseURL: `http://localhost:8000/search?artistName=${artistName}`,
      });
      console.log(result);
      setAlbums(result.data.data.items);
      setArtistName(result.data.artistName);
      console.log(albums);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  // }, [albums]);

  return (
    <div className="container-fluid p-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="artist name"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        className="artistSearchrInput"
      />
      <img
        className="lupa"
        onClick={() => {
          getAlbums(inputName);
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg=="
      ></img>
      {/* <button className="searchButton">Search</button> */}
      <div className="info">
        <h1 className="artistName">{artistName}</h1>
      </div>
      <div className="albumsContainer container-fluid">
        <div className="row">
          {albums.map((album) => {
            return <AlbumCard album={album} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Searcher;
