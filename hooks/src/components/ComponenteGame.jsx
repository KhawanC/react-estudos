import React, { useState } from 'react';
import { BotaoJogo, GameStyled, Tutorial } from '../style/style';

function ComponenteGame(props) {

    const [textoExemplo] = useState('Isso é um teste. Boa sorte!')
    const [textoVariado, setTextoVariado] = useState('Isso é um teste. Boa sorte!')
    const [textoCerto, setTextoCerto] = useState('')
    const [textoErrado, setTextoErrado] = useState('')
    const [isTutorial, setTutorial] = useState(false)
    const [isJogando, setJogando] = useState(false)
    const [isFinalizado, setFinalizado] = useState(false)

    function verificarTexto(texto) {
        if(texto === textoExemplo) {
            setFinalizado(true)
        } else if(texto === textoExemplo.slice(0, texto.length)){
            setTextoVariado(textoExemplo.slice(texto.length, textoExemplo.length))
            setTextoCerto(texto)
            setTextoErrado('')
        } else {
            setTextoErrado(texto.slice(textoCerto.length))
            setTextoVariado(textoExemplo.slice(texto.length, textoExemplo.length))

        }
    }

    const carregarTelas = () => {
        if(isJogando === false && isTutorial === false) {
            return(
                <>
                   <div className='botoesInicial'>
                        <BotaoJogo>
                            <button>Iniciar</button>
                            <button onClick={e => {setTutorial(true)}}>Tutorial</button>
                        </BotaoJogo>
                    </div> 
                </>
            )
        } if(isTutorial === true) {
            return(
                <>
                    <Tutorial>
                        <BotaoJogo>
                            <button onClick={e => {
                                setTutorial(false);
                                setFinalizado(false);
                                setTextoCerto('');
                                setTextoErrado('');
                                setTextoVariado(textoExemplo)}}>Voltar</button>
                        </BotaoJogo>
                        <div className='tutorialContent'>
                            <p>Digite o texto que aparecer na tela o mais rápido que conseguir, respeitando acentuação, espaçamento, letras maiúsculas e minúsculas. Acumule pontos e cuidado para não perder o tempo.</p>
                            <input type='text' readOnly={isFinalizado} onChange={e => verificarTexto(e.target.value)}></input>
                            <div hidden={isFinalizado}>
                                <span style={{color:'green'}}>{textoCerto}</span>
                                <span style={{color:'red'}}>{textoErrado}</span>
                                <span className='textoExemplo'>{textoVariado}</span>
                            </div>
                            {isFinalizado ? <div className='textoFinalizadoCerto'><p>{textoExemplo}</p></div> : <></>}
                        </div>
                    </Tutorial>
                </>
            )
        } 
        
        else {
            console.log('estou jogando ou vendo o tutorial')
        }
    }

    return (
        <>
            <GameStyled>
                <div className='telaInicial'>
                    <div className='tituloJogo'>
                        <p>TypeGame Racer</p>
                    </div>
                    <div className='descJogo'>
                        <p>Divirta-se escrevendo textos e seja o corredor nº 1</p>
                    </div>
                </div>
                {carregarTelas()}
            </GameStyled>
        </>
    );
}

export default ComponenteGame;