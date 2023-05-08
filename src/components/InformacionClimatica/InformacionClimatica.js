import React, { useEffect, useState } from "react";
import { useFetchOpenmeteo } from "../../services/useFetchOpenmeteo";
import "./InformacionClimatica.css";

export const InformacionClimatica = (props) => {
  const { times, temperatures } = useFetchOpenmeteo(
    props.latitud,
    props.longitud
  );

  return (
    <div className="global">
      <div className="mensajes">
        {times.map((hora, index) => (
          <p key={index}>
            {hora.slice(11)} ({temperatures[index]} Cº)
          </p>
        ))}
      </div>
    </div>
  );
};
