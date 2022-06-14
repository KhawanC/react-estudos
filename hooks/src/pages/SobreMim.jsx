import React from "react";
import { useParams } from "react-router-dom";
import { Componente } from "../style/style";
import img from "../images/finalizado_1.jpg";

function SobreMim(props) {

  let { nome, atb0, atb1, atb2, atb3, atb4} = useParams()


  return (
    <>
      <Componente>
        <div>
          <img src={img} alt="oi"></img>
        </div>
        <div>
          <div>
          <p>Nome: {nome}</p>
            <ul>
                <li>{atb0}</li>
                <li>{atb1}</li>
                <li>{atb2}</li>
                <li>{atb3}</li>
                <li>{atb4}</li>
            </ul>
          </div>
        </div>
      </Componente>
    </>
  );
}

export default SobreMim;
