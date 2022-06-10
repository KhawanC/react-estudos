import React, { useState, useEffect } from "react";

const Componente4 = (props) => {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  function adicionar() {
    setValor(oldValor => oldValor + 1)
  }

  useEffect(() => {
    console.log('alterado')
  }, [])

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <hr />
      <br />
      <p>Valor: {valor}</p>
      <button onClick={adicionar}>Aumentar</button>
    </div>
  );
};

export default Componente4;
