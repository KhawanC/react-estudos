import React, { useState } from "react";

const Componente2 = (props) => {

  const [nome, setNome] = useState(() => {
    return "Kaua";
  });

  function alterar() {
    setNome(val => {return 'Kian'})
  }

  return (
    <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>
        <hr/>
        <br/>
        <p>Meu nome é {nome}</p>
        <button onClick={alterar}>Alterar nome</button>
    </div>
  );
};

export default Componente2;
