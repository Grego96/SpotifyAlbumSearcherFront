import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div className="home">
      <h1>Buscador de álbumes Spotify</h1>
      <p className="p-md-5">
        Aplicación para encontrar álbumes de spotify, para buscar ir a la
        pestaña "search" a la izquierda y escribir un nombre de un artista, para
        realizar la búsqueda haga click en la lupa o presione enter.
      </p>
      <p className="p-md-5">
        La aplicación funciona con React del lado del cliente y con node, MySql
        y Sequelize del lado del servidor. Al realizar un petición de álbum, se
        guarda en la db la informacion de la búsqueda, nombre del artista , ip ,
        y por defecto en Sequelize se guarda la fecha de creación en el campo
        createdAt. En el campo artistName se guarda el nombre se haya encontrado
        resultado o no y por lo tanto también se guardan los otros datos.
      </p>
      <h5 className="p-md-5 important">
        <b> Importante:</b> En el back se debe proporcionar el ClientId y el
        ClientIdSecret obtenidos en
        https://developer.spotify.com/dashboard/login ya que se eligió como
        Authorization Code Flow el flujo "Client credentials".
      </h5>
    </div>
  );
}

export default Home;
