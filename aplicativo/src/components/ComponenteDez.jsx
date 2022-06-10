import React from 'react';

const ComponenteDez = (props) => {

    const estilo = {
        color: "red",
        border: "1px solid blue",
        backgroundColor: "pink"}

    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p style={{color: props.corTexto}}>Texto do paragrafo</p>
        </div>
    )
}

export default ComponenteDez