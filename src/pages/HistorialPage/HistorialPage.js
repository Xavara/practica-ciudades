import React, { useContext } from "react";
import HistoryContext from "../../context/HistoryContext";
import "./HistorialPage.css";
import { useNavigate } from "react-router-dom";

export const HistorialPage = () => {
  const { history, setHistory } = useContext(HistoryContext);

  const navigate = useNavigate();

  const handleNavigate = (codigoPostal) => {
    navigate("/buscar/" + codigoPostal);
  };

  return (
    <div className="container-historial">
      {history.length === 0 ? (
        <p>
          No hay resultados de historial, realize alguna búsqueda previamente
          para consultarlo
        </p>
      ) : (
        history.map((item, index) => {
          return (
            <div
              className="item-historial"
              onClick={() => {
                handleNavigate(item.codigoPostal);
              }}
            >
              <div className="cp">{item.codigoPostal}</div>
              {item.nombreCiudad} ({item.comunidad})
            </div>
          );
        })
      )}
    </div>
  );
};
