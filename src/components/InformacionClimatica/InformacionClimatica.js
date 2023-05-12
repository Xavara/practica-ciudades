import React from "react";
import { useFetchOpenmeteo } from "../../services/useFetchOpenmeteo";
import "./InformacionClimatica.css";

export const InformacionClimatica = (props) => {
  const { times, temperatures, loading, error } = useFetchOpenmeteo(
    props.latitud,
    props.longitud
  );

  return (
    <div>
      {props.loading ? (
        <img src="/images/miscalenea/loading.gif" alt="cargando" />
      ) : props.error ? (
        <p>Sin resultados</p>
      ) : (
        <div className="global">
          <div className="mensajes">
            {times.map((hora, index) => (
              <p key={index}>
                {hora.slice(11)} ({temperatures[index]} Cº)
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
