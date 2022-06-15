import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { BotaoJogo, GameStyled, Tutorial } from '../style/style';

function ComponenteGame(props) {

    const [textoExemplo] = useState('Isso é um teste. Boa sorte!')
    const [isTutorial, setTutorial] = useState(false)
    const [isJogando, setJogando] = useState(false)

    function verificarTexto(texto) {
        console.log(texto)
        console.log(textoExemplo.slice(0, texto.length))

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
                            <button onClick={e => {setTutorial(false)}}>Voltar</button>
                        </BotaoJogo>
                        <div className='tutorialContent'>
                            <p>Digite o texto que aparecer na tela o mais rápido que conseguir, respeitando acentuação, espaçamento, letras maiúsculas e minúsculas. Acumule pontos e cuidado para não perder o tempo.</p>
                            <input type='text' onChange={e => verificarTexto(e.target.value)}></input>
                            <p className='textoExemplo'>{textoExemplo}</p>
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