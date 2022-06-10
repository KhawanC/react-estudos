import React from "react";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";
import ComponenteDez from "./components/ComponenteDez";

import './App.css'

function App() {

  return (
    <>
      <ComponenteDez titulo='Componente 10' corTexto='red'/>
      <ComponenteNove titulo='Componente 9' nome='Kian'/>
      <ComponenteOito titulo='Componente8' valor={10} nome='Kelvin'/>
      <ComponenteSete titulo='Componente 7' valor={true}/>
      <ComponenteSeis titulo='Componente 6'/>
      <ComponenteQuatro titulo='Componente 4'/>
      <ComponenteTres titulo='Componente 3' subtitulo='subtitulo do componente 3'/>
      <ComponenteDois/>
      <ComponenteUm/>
    </>
  )
}

export default App;
