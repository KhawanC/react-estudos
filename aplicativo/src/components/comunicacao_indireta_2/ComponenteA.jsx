import React from 'react';
import ComponenteB from './ComponenteB';

const ComponenteA = (props) => {

    function executar(valor) {
        console.log(valor)
    }
    
    return(
        <div className='componente'>
            <p className='titulo'> Titulo: {props.titulo}</p>
            <ComponenteB titulo='Componente Filho' funcao={executar}/>
        </div>
    )
}

export default ComponenteA