import React from 'react';
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
    return(
        <div className='componente'>
            <p>Titulo: {props.titulo}</p>
            <ComponenteCinco texto="Hello Word"/>
        </div>
    )
}

export default ComponenteQuatro