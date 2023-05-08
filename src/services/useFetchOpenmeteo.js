import { useEffect, useState } from "react";

export const useFetchOpenmeteo = (latitud, longitud) => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [times, setTimes] = useState([]);
  const [temperatures, setTemperatures] = useState([]);

  const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m`;

  const fetchOpenmeteo = (apiURL) => {
    setLoading(true);
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setTimes(data.hourly.time);
        setTemperatures(data.hourly.temperature_2m);
      })
      .catch((error) => {
        console.log("Ha habido un error:", error);
        setError(true);
      })
  };

  useEffect(() => {
    fetchOpenmeteo(apiURL);
  }, [apiURL]);

  return {times, temperatures, loading, error}
};
