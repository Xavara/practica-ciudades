import React from "react";
import "./InformacionGeografica.css";

export const InformacionGeografica = (props) => {
  const url = `https://www.google.com/maps/@${props.latitud},${props.longitud},13z`;
  const handleMapa = () => {
    window.open(url);
  };
  return (
    <div>
      {
        props.loading ? (<img src="/images/miscalenea/loading.gif" alt="cargando" />) : props.error ? (<p>Sin resultado</p>)
        : (
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
      <div className="mapa" onClick={handleMapa}>
        <img
          src="/images/miscalenea/mapa.png"
          alt="mapa"
          
        ></img>
        <p>Ver mapa</p>
        </div>
        </div>
        )
      }
      </div>
    
  );
};
