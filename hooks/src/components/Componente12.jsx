import React, { useState, useReducer } from "react";

function Componente12(props) {
  const [valor, setValor] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    valor2: 0,
    mostrar2: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "aumentar":
        return {
          valor2: state.valor2 + 1,
          mostrar2: state.mostrar2,
        };
      case "altVisib":
        return {
          valor2: state.valor2,
          mostrar2: !state.mostrar2,
        };
      default:
        return state;
    }
  }

  return (
    <>
      <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>
        <p>Valor: {valor}</p>
        {mostrar === true ? <p>Estou mostrando</p> : <></>}
        <button
          onClick={() => {
            setValor(valor + 1);
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Mostrar/Esconder
        </button>
        <hr />
        <br />
        <p>Valor2: {state.valor2}</p>
        <p>{state.mostrar2 && <p>Estou mostrando</p>}</p>
        <button
          onClick={() => {
            dispatch({ type: "aumentar" });
          }}
        >
          Aumentar2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "altVisib" });
          }}
        >
          Mostrar2/Esconder2
        </button>
      </div>
    </>
  );
}

export default Componente12;
