import React from 'react';
import ComponenteIf from './ComponenteIf';

const ComponenteNove = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <ComponenteIf condicao={props.nome === 'Kaua'}>
                <p>A condiçaõ é verdadeira</p>
            </ComponenteIf>
            <ComponenteIf condicao={props.nome !== 'Kaua'}>
                <p>A condição é falsa</p>
            </ComponenteIf>
        </div>
        
    )   
}

export default ComponenteNove