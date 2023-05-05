import React, { useEffect, useState } from "react";
import "./InformacionPolitica.css";
import banderas from "../../config/banderas.json";

export const InformacionPolitica = (props) => {
  const [loading, setLoading] = useState(true);
  const [ciudad, setCiudad] = useState("");
  const [comunidad, setComunidad] = useState("");
  const [comunidadAbr, setComunidadAbr] = useState("");

  const apiURL = `https://api.zippopotam.us/es/${props.codigoPostal}`;
  const fetchPolitica = (apiURL) => {
    setLoading(true);
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setCiudad(data.places[0]["place name"]);
        setComunidad(data.places[0].state);
        setComunidadAbr(data.places[0]["state abbreviation"]);
        console.log(data);
        console.log(data.places[0].latitude);
        console.log(data.places[0].longitude);
        console.log(data.places[0]["state abbreviation"]);
        setLoading(false);
      })
      .catch((error) => console.log("Error:", error));
  };

  useEffect(() => {
    fetchPolitica(apiURL);
  }, [apiURL]);

  return (
    <div>
      {loading ? (
        <img src="/images/miscalenea/loading.gif" alt="cargando" />
      ) : (
        <div className="container-politico">
          <img
            alt={banderas[comunidadAbr].alt}
            src={banderas[comunidadAbr].src}
          ></img>
          <div>
            <p>
              <b>Ciudad: </b>
              {ciudad}
            </p>
            <p>
              <b>Comunidad: </b>
              {comunidad}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
