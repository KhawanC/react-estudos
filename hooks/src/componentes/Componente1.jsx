import React, {useState} from 'react';

const Componente1 = (props) => {

    const [valor, setValor] = useState(() => {return 0})

    function diminuir() {
        setValor(val => val -1)
    }

    function aumentar() {
        setValor(val => val +1)
    }

    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <br/>
            <button onClick={diminuir}>Diminuir</button>
            <span style={{paddingInline: "20px"}}>Valor: {valor}</span>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default Componente1