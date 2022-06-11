import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLista from "../componentes/FormLista"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lista" element={<FormLista/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
