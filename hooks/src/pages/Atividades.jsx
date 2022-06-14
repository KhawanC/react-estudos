import React, { useState } from "react";
import Componente1 from "../components/Componente1";
import Componente2 from "../components/Componente2";
import Componente3 from "../components/Componente3";
import Componente4 from "../components/Componente4";
import Componente5 from "../components/Componente5";
import ComponenteAPI from "../components/ComponenteAPI";
import Componente7 from "../components/Componente7";
import Componente8 from "../components/Componente8";
import Componente11 from "../components/Componente11";
import Componente12 from "../components/Componente12";
import Componente13 from "../components/Componente13";
import Componente14 from "../components/Componente14";
import Componente15 from "../components/Componente15";


function Atividades() {
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
      <Componente11 titulo='useMemo'/>
      <Componente12 titulo='useReducer'/>
      <Componente13 titulo='useReducer 2'/>
      <Componente14 titulo='useParam'/>
      {/* <Componente15 titulo='API Externa v2'/> */}
    </>
  );
}

export default Atividades;
