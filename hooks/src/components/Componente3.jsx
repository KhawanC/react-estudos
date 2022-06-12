import React, { useState } from "react";

const Componente3 = (props) => {

  const [pessoa, setPessoa] = useState({
    nome: "Kaua",
    idade: 18,
    pontos: 0
  })

  function alterarNome(nome) {
    setPessoa(oldP => {
        return {
            ...oldP,
            nome: nome
        }
    })
  }

  return (
    <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>
        <hr/>
        <p>Nome: {pessoa.nome}</p>
        <p>Nome: {pessoa.idade}</p>
        <p>Nome: {pessoa.pontos}</p>
        <br/>
        <input type="text" onChange={event => alterarNome(event.target.value)}/>
    </div>
  );
};

export default Componente3;
