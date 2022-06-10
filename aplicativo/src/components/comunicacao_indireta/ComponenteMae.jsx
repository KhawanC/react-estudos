import React from 'react';
import ComponenteFilha from './ComponenteFilha';

const ComponenteMae = (props) => {

    function clicou() {
        console.log("Botao da filha foi aperatado")
    }

    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Mãe</p>
            <ComponenteFilha titulo='Componente Filha' click={clicou}/>
        </div>
    )
}

export default ComponenteMae