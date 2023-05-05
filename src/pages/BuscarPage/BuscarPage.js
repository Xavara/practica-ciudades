import React from "react";
import { ContenedorInfo } from "../../components/ContenedorInfo/ContenedorInfo";
import { Buscador } from "../../components/Buscador/Buscador";
import { InformacionPolitica } from "../../components/InformacionPolitica/InformacionPolitica";
import { InformacionClimatica } from "../../components/InformacionClimatica/InformacionClimatica";
import { InformacionGeografica } from "../../components/InformacionGeografica/InformacionGeografica";
import { useParams } from "react-router-dom";


export const BuscarPage = () => {
  const {ciudad} = useParams();
  console.log("params:",ciudad)

  

  return (
    <div>
      <Buscador></Buscador>
      <ContenedorInfo titulo="Información política" >
        <InformacionPolitica codigoPostal={ciudad}></InformacionPolitica>
      </ContenedorInfo>
      <ContenedorInfo titulo="Información climática" >
        <InformacionClimatica></InformacionClimatica>
      </ContenedorInfo>
      <ContenedorInfo titulo="Información geográfica" >
        <InformacionGeografica></InformacionGeografica>
      </ContenedorInfo>
    </div>
  );
};
