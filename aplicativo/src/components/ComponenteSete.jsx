import React from 'react';

export default function(props) {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            {props.valor === true ?<p>Verdadeiro</p> : <p>Falso</p>}
        </div>
    )
}