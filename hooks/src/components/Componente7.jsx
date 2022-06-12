import React, {useState, useRef, useEffect} from 'react';

const Componente7 = (props) => {

    const [texto, setTexto] = useState('')
    const [nome, setNome] = useState('')
    const [nome2, setNome2] = useState('')
    const nomes = ['Kaua', 'Kian', 'Karina', 'Kelvin', 'Kaike', 'Katarina']
    const tot = useRef(0)
    const inputRef = useRef() 

    useEffect(() => {
        tot.current++
    }, [texto])

    function aleatNumIntervalo(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function trocarNome() {
        setNome(nomes[aleatNumIntervalo(0,(nomes.length-1))])
    }

    function salvarNome() {
        setNome2(inputRef.current.value)
    }

    return(
        <>
            <div className='componente'>
                <p className='titulo'>Titulo: {props.titulo}</p>
                <hr/>
                <br/>
                <input type='text' value={texto} ref={inputRef} onChange={e => {
                    setTexto(e.target.value)
                }}></input>
                <br/>
                <br/>
                <p>O texto é: {texto}</p>
                <br/>
                <p>(useRef) O texto é: {nome2}</p>
                <br/>
                <button onClick={salvarNome}>Salvar nome</button>
                <br/>
                <br/>
                <p>Total: {tot.current}</p>
                <br/>
                <hr/>
                <br/>
                <span>Nome aleatório: {nome}</span>
                <br/>
                <br/>
                <button onClick={trocarNome}>Trocar nome</button>
            </div>
        </>
    )
}

export default Componente7