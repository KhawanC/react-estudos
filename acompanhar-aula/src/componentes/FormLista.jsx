import React, { useState } from "react";
import ListaEsqueleto from "./ListaEsqueleto";

const FormLista = () => {
  const [lista, setItens] = useState({
    item: "",
    quantidade: 0,
  });

  const [item, setItem] = useState(() => {
    return "";
  });

  const [quantidade, setQuantidade] = useState(() => {
    return 0;
  });

  function handleAdd() {
    setItens((e) => {
      console.log(lista);
      return {
        item: item,
        quantidade: quantidade,
      };
    });
  }

  return (
    <>
      <div className="componente">
        <p className="titulo">Lista de Compras</p>
        <div style={{ margin: "10px" }}>
          <label>Item: </label>
          <input
            style={{ paddingLeft: "10px" }}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <br />
          <br />
          <label>Quantidade: </label>
          <input
            style={{ paddingLeft: "10px" }}
            onChange={(e) => setQuantidade(e.target.value)}
          ></input>
          <br />
          <br />
          <button onClick={handleAdd}>Adicionar</button>
        </div>
        <div className="componente">
            <ListaEsqueleto item={lista.item} quantidade={lista.quantidade}/>
        </div>
      </div>
    </>
  );
};

export default FormLista;
