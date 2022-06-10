import React from 'react';

const ComponenteFilha = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Filha</p>
            <button onClick={props.click}>Clique Aqui</button>
        </div>
    )
}

export default ComponenteFilha