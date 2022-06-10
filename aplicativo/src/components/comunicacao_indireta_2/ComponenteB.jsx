import React from 'react';

const ComponenteB = (props) => {

    function executar() {
        props.funcao('Valor: ' + Math.random())
    }

    return(
        <div className='componente'>
            <p className='titulo'> Titulo: {props.titulo}</p>
            <button onClick={executar}>Clique aqui</button>
        </div>
    )
}

export default ComponenteB