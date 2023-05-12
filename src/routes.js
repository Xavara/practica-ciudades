import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BuscarPage } from "./pages/BuscarPage/BuscarPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HistorialPage } from "./pages/HistorialPage/HistorialPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { HistoryContextProvider } from "./context/HistoryContext";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <HistoryContextProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/buscar/:ciudad" element={<BuscarPage />}></Route>
          <Route exact path="/historial" element={<HistorialPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </HistoryContextProvider>
    </Router>
  );
};
