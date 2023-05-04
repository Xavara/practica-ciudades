import React from "react";
import { ContenedorInfo } from "../../components/ContenedorInfo/ContenedorInfo";
import { Buscador } from "../../components/Buscador/Buscador";

export const BuscarPage = () => {
  return (
    <div>
      <Buscador></Buscador>
      <ContenedorInfo titulo="Información política"></ContenedorInfo>
      <ContenedorInfo titulo="Información climática"></ContenedorInfo>
      <ContenedorInfo titulo="Información geográfica"></ContenedorInfo>
    </div>
  );
};
