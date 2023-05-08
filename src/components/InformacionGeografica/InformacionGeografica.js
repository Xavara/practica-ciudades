import React from "react";
import "./InformacionGeografica.css";

export const InformacionGeografica = (props) => {
  const url = `https://www.google.com/maps/@${props.latitud},${props.longitud},13z`;
  const handleMapa = () => {
    window.open(url);
  };
  return (
    <div className="contenedor-geografico">
      <div>
        <p>
          <b>Latitud: </b>
          {props.latitud}
        </p>
        <p>
          <b>Longitud: </b>
          {props.longitud}
        </p>
      </div>
      <div className="mapa">
        <img
          src="/images/miscalenea/mapa.png"
          alt="mapa"
          onClick={handleMapa}
        ></img>
        <p>Ver mapa</p>
      </div>
    </div>
  );
};
