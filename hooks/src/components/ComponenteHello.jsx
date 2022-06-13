import React from 'react';
import { Componente, Titulo } from '../style/style';

function ComponenteHello(props) {
    return (
        <>
            <div className='componente'>
                <Titulo>Hello World!</Titulo>
                <br/>
                <p>Estou aprendendo React JS e aqui estão alguns dos meus aprendizados. Divirta-se!</p>
            </div>
            <Componente>
                <div>
                    <p>Teste</p>
                </div>
            </Componente>
        </>
    );
}

export default ComponenteHello;