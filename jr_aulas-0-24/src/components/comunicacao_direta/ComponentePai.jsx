import React from 'react';
import ComponenteFilho from './ComponenteFilho';

const ComponentePai = (props) => {
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo='Componente Filho' cargo='Administrador'>
                <span>Kaua Cassiano</span>
            </ComponenteFilho>
            <ComponenteFilho titulo='Componente Filho' cargo='Analista de Sistemas'>
                <span>Kian Cassiano</span>
            </ComponenteFilho>
            <ComponenteFilho titulo='Componente Filho' cargo='Desenvolvedor WEB'>
                <span>Kelvin Cassiano</span>
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai