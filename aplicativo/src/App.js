import React from "react";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import './App.css'

function App() {

  return (
    <>
      <ComponenteQuatro titulo='Componente 4'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </ComponenteQuatro>
      <ComponenteTres titulo='Componente 3' subtitulo='subtitulo do componente 3'/>
      <ComponenteDois/>
      <ComponenteUm/>
    </>
  )
}

export default App;
