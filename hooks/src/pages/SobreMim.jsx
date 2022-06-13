import React from "react";
import { Componente } from "../style/style";
import img from "../images/finalizado_1.jpg";

function SobreMim(props) {
  return (
    <>
      <Componente>
        <div>
          <img src={img} alt="oi"></img>
        </div>
        <div>
          <div>
          <p>Nome: Kauã Cassiano</p>
            <ul>
                <li>Desenvolvedor Web</li>
                <li>Residente do Serratec</li>
                <li>Colaborador MobiCrowd</li>
                <li>Java hater</li>
                <li>Jogador de Aphelios</li>
            </ul>
          </div>
        </div>
      </Componente>
    </>
  );
}

export default SobreMim;
