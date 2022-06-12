import React, { useState } from "react";
import Componente1 from './componentes/Componente1'
import Componente2 from "./componentes/Componente2";
import Componente3 from "./componentes/Componente3";
import Componente4 from "./componentes/Componente4";
import Componente5 from "./componentes/Componente5";
import ComponenteAPI from "./componentes/ComponenteAPI";
import Componente7 from "./componentes/Componente7";
import Componente8 from "./componentes/Componente8";

function App() {
  const [valor, setValor] = useState(0);

  // var valor = 0;

  // function incrementar() {
  //   valor++
  //   console.log(valor)
  // }

  function incrementar() {
    setValor(valor + 1);
  }
  function decrementar() {
    setValor(valor - 1);
  }

  return (
    <>
      <div className="componente">
        <p className="titulo">React Hooks</p>
        <p>Valor = {valor}</p>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decrementar}>Diminuir</button>
      </div>
      <Componente1 titulo='Forma eficiente useState'/>
      <Componente2 titulo='useState em String'/>
      <Componente3 titulo='useState em String pt 2'/>
      <Componente4 titulo='useEffects'/>
      <Componente5 titulo='useEffects v2'/>
      <ComponenteAPI titulo='Utilizando API externa'/>
      <Componente7 titulo='useRef'/>
      <Componente8/>
    </>
  );
}

export default App;
