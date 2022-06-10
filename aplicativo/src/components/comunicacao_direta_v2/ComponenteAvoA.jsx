import React from 'react';
import ComponentePaiA from './ComponentePaiA';

const ComponenteAvoA = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Avô</p>
            <ComponentePaiA titulo='Mid Level' mensagem='O avô te ama' nome='Kaua'/>
        </div>
    )
}

export default ComponenteAvoA