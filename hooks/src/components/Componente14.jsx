import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Componente14(props) {

    const [usuario] = useState({
        nome: 'Kaua_Cassiano',
        atributos: ['Desenvolvedor_Web', 'Residente_do_Serratec',
    'Colaborador_MobiCrowd', 'Java_hater', 'Jogador_de_Aphelios']
    })

    const redirecionar = useNavigate();

    return (
        <>
            <div className='componente'>
                <p className='titulo'>Titulo: {props.titulo}</p>
                <button onClick={() => redirecionar(`/sobre_mim/${usuario.nome}&${usuario.atributos[0]}&${usuario.atributos[1]}&${usuario.atributos[2]}&${usuario.atributos[3]}&${usuario.atributos[4]}`) }>Sobre mim</button>
            </div>
        </>
    );
}

export default Componente14;