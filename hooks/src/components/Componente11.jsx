import React, {useState, useEffect, useMemo} from 'react';

function Componente11(props) {

    const [valor, setValor] = useState(() => {return 0})
    const [numero, setNumero] = useState(() => {return 1000})
    //const valorCalculado = funcLonga(valor)
    const valorCalculado = useMemo(() => {
        return funcLonga(valor)
    }, [valor])

    useEffect(() => {
        console.log('renderizado')
    })

    function aumentar() {
        setValor(e => e+1)
    }

    function aumentar2() {
        setNumero(e => e+10)
    }

    function funcLonga(v) {
        for (let i = 0; i < 5000; i++) {console.log('ok')}
        return valor * 2
    }
    return (
        <>
            <div className='componente'>
                <p className='titulo'>Titulo: {props.titulo}</p>
                <hr/>
                <p>Valor: {valor}</p>
                <p>Numero: {numero}</p>
                <p>Valor multiplicado: {valorCalculado}</p>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={aumentar2}>Aumentar2</button>
            </div>   
        </>
    );
}

export default Componente11;