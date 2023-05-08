import "./InformacionPolitica.css";
import banderas from "../../config/banderas.json";

export const InformacionPolitica = (props) => {
  

  return (
    <div>
      {props.loading ? (
        <img src="/images/miscalenea/loading.gif" alt="cargando" />
      ) : props.error ? (<p>Sin resultado</p>) : (
        <div className="container-politico">
          <img
            alt={banderas[props.comunidadAbr].alt}
            src={banderas[props.comunidadAbr].src}
          ></img>
          <div>
            <p>
              <b>Ciudad: </b>
              {props.nombreCiudad}
            </p>
            <p>
              <b>Comunidad: </b>
              {props.comunidad}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
