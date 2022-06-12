import React, { useEffect, useState } from "react";

const Componente5 = (props) => {
  const clientes = ["João", "Ana", "Carlos"];
  const produtos = ["Pão", "Queijo", "Café"];
  const vendas = ["1 x Pão (Jõao)", "2 x Queijo (Ana)", "3 x Café (Carlos)"];

  const [info, setInfo] = useState("");

  useEffect(() => {
    console.clear()
    switch (info) {
        case 'João':
            console.table(clientes)
            break;
        case 'Ana':
            console.table(clientes)
            break;
        case 'Carlos':
            console.table(clientes)
            break;
        case 'Pão':
            console.table(produtos)
            break;
        case 'Queijo':
            console.table(produtos)
            break;
        case 'Café':
            console.table(produtos)
            break;
        case '1 x Pão (Jõao)':
            console.table(vendas)
            break;
        case '2 x Queijo (Ana)':
            console.table(vendas)
            break;
        case '3 x Café (Carlos)':
            console.table(vendas)
            break;
        default:
            break;
    }
  })

  function aleatNumIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>
        <hr />
        <p style={{ padding: "10px" }}>{info}</p>
        <div style={{display:'flex', gap:'10px'}}>
          <button onClick={() => setInfo(clientes[aleatNumIntervalo(0,2)])}>Cliente</button>
          <button onClick={() => setInfo(produtos[aleatNumIntervalo(0,2)])}>Produto</button>
          <button onClick={() => setInfo(vendas[aleatNumIntervalo(0,2)])}>Venda</button>
        </div>
      </div>
    </>
  );
};

export default Componente5;
