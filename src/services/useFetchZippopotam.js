import { useEffect, useState } from "react";

export const useFetchZipopotam = (ciudad) => {
  const [loading, setLoading] = useState(true);
  const [nombreCiudad, setNombreCiudad] = useState("");
  const [comunidad, setComunidad] = useState("");
  const [comunidadAbr, setComunidadAbr] = useState("");
  const [error, setError] = useState(false);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const apiURL = `https://api.zippopotam.us/es/${ciudad}`;
  const fetchPolitica = (apiURL) => {
    setLoading(true);
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setNombreCiudad(data.places[0]["place name"]);
        setComunidad(data.places[0].state);
        setComunidadAbr(data.places[0]["state abbreviation"]);
        console.log(data);
        setLatitud(data.places[0].latitude);
        setLongitud(data.places[0].longitude);
        console.log(data.places[0]["state abbreviation"]);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchPolitica(apiURL);
  }, [apiURL]);

  return {
    nombreCiudad,
    comunidad,
    comunidadAbr,
    loading,
    error,
    longitud,
    latitud,
  };
};
