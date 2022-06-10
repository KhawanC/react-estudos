import React from 'react';

const ComponenteFilhoA = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Filho</p>
            <p>Nome: {props.nome}</p>
            <p>Mensagem do Avô: {props.mensagem}</p>
        </div>
    )
}

export default ComponenteFilhoA