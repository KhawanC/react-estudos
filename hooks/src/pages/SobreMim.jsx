import React from "react";
import { useParams } from "react-router-dom";
import { Componente } from "../style/style";
import img from "../images/finalizado_1.jpg";

function SobreMim(props) {

  let { nome, atb0, atb1, atb2, atb3, atb4} = useParams()

  const find = '_'
  var re = new RegExp(find, 'g')

  return (
    <>
      <Componente>
        <div>
          <img src={img} alt="oi"></img>
        </div>
        <div>
          <div>
          <p>Nome: {nome.replace(re, ' ')}</p>
            <ul>
                <li>{atb0.replace(re, ' ')}</li>
                <li>{atb1.replace(re, ' ')}</li>
                <li>{atb2.replace(re, ' ')}</li>
                <li>{atb3.replace(re, ' ')}</li>
                <li>{atb4.replace(re, ' ')}</li>
            </ul>
          </div>
        </div>
      </Componente>
    </>
  );
}

export default SobreMim;
