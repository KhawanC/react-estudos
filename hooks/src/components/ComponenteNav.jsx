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
          <button onClick={() => nav("/")} style={props.claro ? buttonTema : {}}>Tela inicial</button>
          <button onClick={() => nav("/atividades") } style={props.claro ? buttonTema : {}}>Atividades</button>
          <button onClick={() => nav("/sobre_mim") } style={props.claro ? buttonTema : {}}>Sobre mim</button>
        </nav>
        <div className="funcExtra">
            <button onClick={e => {props.setClaro(!props.claro) } } style={props.claro ? buttonTema : {}}>Tema</button>
        </div>
      </div>
    </>
  );
}

export default ComponenteNav;
