import React from "react";
import "./Navbar.css";

export const Navbar = () => {
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
                <a href="/buscar/213">Buscar</a>
            </div>
            <div>
                Historial
            </div>
        </div>
    </div>
  );
};
