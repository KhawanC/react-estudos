import React from 'react';

const ComponenteQuatro = (props) => {
    return(
        <div className='componente'>
            <p>Titulo: {props.titulo}</p>
            {props.children}
        </div>
    )
}

export default ComponenteQuatro