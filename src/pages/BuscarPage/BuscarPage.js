import React from "react";
import { ContenedorInfo } from "../../components/ContenedorInfo/ContenedorInfo";
import { Buscador } from "../../components/Buscador/Buscador";
import { InformacionPolitica } from "../../components/InformacionPolitica/InformacionPolitica";
import { InformacionClimatica } from "../../components/InformacionClimatica/InformacionClimatica";
import { InformacionGeografica } from "../../components/InformacionGeografica/InformacionGeografica";
import { useParams } from "react-router-dom";
import { useFetchZipopotam } from "../../services/useFetchZippopotam";

export const BuscarPage = () => {
  const { ciudad } = useParams();
  const {
    nombreCiudad,
    comunidad,
    comunidadAbr,
    loading,
    error,
    longitud,
    latitud,
  } = useFetchZipopotam(ciudad);
  console.log("params:", ciudad);
  console.log(nombreCiudad);
  console.log(comunidad);
  console.log(comunidadAbr);
  console.log(loading);
  console.log(error);
  console.log(longitud)
  console.log(latitud)


  return (
    <div>
      <Buscador></Buscador>
      <ContenedorInfo titulo="Información política">
        <InformacionPolitica
          nombreCiudad={nombreCiudad}
          comunidad={comunidad}
          comunidadAbr={comunidadAbr}
          error={error}
          loading={loading}
        ></InformacionPolitica>
      </ContenedorInfo>
      <ContenedorInfo titulo="Información climática">
        <InformacionClimatica latitud={latitud} longitud={longitud}></InformacionClimatica>
      </ContenedorInfo>
      <ContenedorInfo titulo="Información geográfica">
        <InformacionGeografica latitud={latitud} longitud={longitud}></InformacionGeografica>
      </ContenedorInfo>
    </div>
  );
};
