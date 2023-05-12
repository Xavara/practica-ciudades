import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [fondoBuscar, setFondoBuscar] = useState(true);
  const [fondoHistorial, setFondoHistorial] = useState(false);

  const handleNavigate = (ruta, clickActivo, clickInactivo) => {
    navigate(ruta);
    clickActivo(true);
    clickInactivo(false);
  };

  return (
    <div className="container">
      <div className="izquierda">
        <img src="/logo.png" alt="logo"></img>
      </div>
      <div className="centro">
        <h1>Ciudades</h1>
      </div>
      <div className="derecha">
        <div>
          <label
            className={fondoBuscar ? "activo" : "inactivo"}
            onClick={() => {
              handleNavigate("/", setFondoBuscar, setFondoHistorial);
            }}
          >
            Buscar
          </label>
        </div>
        <div>
          <label
            className={fondoHistorial ? "activo" : "inactivo"}
            onClick={() => {
              handleNavigate("historial", setFondoHistorial, setFondoBuscar);
            }}
            ruta=""
          >
            Historial
          </label>
        </div>
      </div>
    </div>
  );
};
