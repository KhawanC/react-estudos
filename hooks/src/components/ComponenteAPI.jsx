import React, { useEffect, useState } from 'react';
import UsuarioAPI from './UsuarioAPI';

const ComponenteAPI = (props) => {

    const [usuarios, setUsuario] = useState([])

     useEffect(() => {
         fetch('https://dummyjson.com/users').then(res => res.json()).then(
             json => {
                 setUsuario(json.users)
             }
         )
     }, [])

    return(
        <>
            { <div className='componente'>
                <p className='titulo'>Titulo: {props.titulo}</p>
                {usuarios.map(usr => {
                    return <UsuarioAPI key={usr.id} usr={usr}/>})}
            </div> }
        </>
    )   
}

export default ComponenteAPI