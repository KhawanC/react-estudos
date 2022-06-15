import React from "react";
import { useNavigate } from "react-router-dom";

function ComponenteNav(props) {
    const nav = useNavigate();

    const buttonTema = {
        color: "black",
        
        border: "1px solid black"
    }

    const divTema = {
        backgroundColor: "white",

        transition: "0.5s"
    }

  return (
    <>
      <div style={props.claro ? divTema : {}}>
        <nav className="navegacao">
          <button onClick={() => nav("/")}>Tela inicial</button>
          <button onClick={() => nav("/atividades") }>Atividades</button>
          <button onClick={() => nav("/sobre_mim") } >Sobre mim</button>
          <button onClick={() => nav("/game") } >Mini game</button>
        </nav>
        <div className="funcExtra">
            <button onClick={e => {props.setClaro(!props.claro) } }>Tema</button>
        </div>
      </div>
    </>
  );
}

export default ComponenteNav;
