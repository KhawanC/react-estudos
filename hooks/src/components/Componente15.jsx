import React, { useEffect, useState } from 'react';
import UsuarioAPI2 from './UsuarioAPI2';

function Componente15(props) {

    const [listUsuario, setListUsuario] = useState([])

    // useEffect(() => {
    //     fetch('https://dummyjson.com/users').then(res => res.json()).then(
    //         json => {
    //             setListUsuario(json.users)
    //         }
    //     )
    // })

    return (
        <>
            <p>Titulo: {props.titulo}</p>
            {listUsuario.map(usr => {
                return <UsuarioAPI2 key={usr.id} usr={usr}/>
            })}
        </>
    );
}

export default Componente15;