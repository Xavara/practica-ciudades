import React from "react";
import { ContenedorInfo } from "../../components/ContenedorInfo/ContenedorInfo";
import { Buscador } from "../../components/Buscador/Buscador";
import { InformacionPolitica } from "../../components/InformacionPolitica/InformacionPolitica";
import { InformacionClimatica } from "../../components/InformacionClimatica/InformacionClimatica";
import { InformacionGeografica } from "../../components/InformacionGeografica/InformacionGeografica";
import { useParams } from "react-router-dom";
import { useFetchZipopotam } from "../../services/useFetchZippopotam";
import { useFetchOpenmeteo } from "../../services/useFetchOpenmeteo";

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

  return (
    <div>
      <Buscador loading={loading}></Buscador>

      {error ? (
        <p style={{ color: "red", marginLeft: "4%"}}>Sin resultados</p>
      ) : (
        <>
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
            <InformacionClimatica
              latitud={latitud}
              longitud={longitud}
              loading={loading}
              error={error}
            ></InformacionClimatica>
          </ContenedorInfo>
          <ContenedorInfo titulo="Información geográfica">
            <InformacionGeografica
              latitud={latitud}
              longitud={longitud}
              error={error}
              loading={loading}
            ></InformacionGeografica>
          </ContenedorInfo>
        </>
      )}
    </div>
  );
};
