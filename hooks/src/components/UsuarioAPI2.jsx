import React from 'react';

function UsuarioAPI2({usr}) {
    return (
        <>
            
            <div>
                <img src={usr.image} alt='imagem pessoa'></img>
            </div>
            <div>
                <p>Nome: {usr.firstName}</p>
                <p>Idade: {usr.age}</p>
                <p>Email: {usr.email}</p>
                <p>Nome: {usr.firstName}</p>
                <p>Senha: {usr.password}</p>
            </div>
        </>
    );
}

export default UsuarioAPI2;