import React from 'react';
import ComponenteFilhoA from './ComponenteFilhoA';

const ComponentePaiA = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilhoA titulo='Low level' {...props}/>
        </div>
    )
}

export default ComponentePaiA