import React from 'react';

// export default (props) => 
//     <div className='componente'>
//         <p>Titulo: {props.titulo}</p>
//     </div>

const ComponenteTres = (props) => {
    return(
        <div className='componente'>
            <p>Titulo: {props.titulo}</p>
            <p>Subtitulo: {props.subtitulo}</p>
        </div>
    )
}

export default ComponenteTres