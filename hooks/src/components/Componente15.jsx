import React, { useState, useEffect } from 'react';
import DummyJson from '../Services/DummyJSON';
import { CardAPI, UsuariosDummy } from '../style/style';

function Componente15(props) {

    const [listUsuarios, setListUsuarios] = useState([])

    useEffect(() => {

        const getUsuario = async() => {
            const res = await DummyJson.get('users')
            setListUsuarios(res.data.users)
        }
        getUsuario()
    }, [])

    return (
        <>
            <div className='componente'>
                <p className='titulo'>Titulo {props.titulo}</p>
                <UsuariosDummy>
                {listUsuarios.map(usr => {
                return <CardAPI key={usr.id}>
                    <div className='foto'>
                        <img src={usr.image} alt="" />
                    </div>
                    <div className='informacoes'>
                        <p>Nome: {usr.firstName + " " + usr.lastName}</p>
                        <p>Idade: {usr.age}</p>
                        <p>Email: {usr.email}</p>
                        <p>Senha: {usr.password}</p>
                        <p>Telefone: {usr.phone}</p>
                    </div>
                </CardAPI>
            })}
                </UsuariosDummy>
                
            </div>
        </>
    );
}

export default Componente15;