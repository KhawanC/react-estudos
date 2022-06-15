import React, { useEffect, useState, useRef } from 'react';
import SerraFunko from '../Services/SerraFunko';

function Componente16(props) {

    const [listUsuarios, setListUsuarios] = useState([])
    const [idUsuario, setIdUsuario] = useState(0)
    let htmlUsuario = useRef()

    useEffect(() => {
        const getUsuarioAPI = async() => {
            const res = await SerraFunko.get('cliente')
            setListUsuarios(res.data)
        }

        const carregarUsuarios = () => {
            return(
                <>
                    <div>
                        <p>Nome: {listUsuarios[idUsuario].nomeCompleto}</p>
                        <p>Cpf: {listUsuarios[idUsuario].cpf}</p>
                        <p>Data de nascimento: {listUsuarios[idUsuario].dataNascimento}</p>
                        <p>Email: {listUsuarios[idUsuario].email}</p>
                        <p>Telefone: {listUsuarios[idUsuario].telefone}</p>
                    </div>
                </>
            )
        }

        getUsuarioAPI()
        htmlUsuario.current = carregarUsuarios()
    }, [idUsuario])

    return (
        <>
            <div className='componente'>
                <p className='titulo'>Titulo: {props.titulo}</p>
                <br/>
                <span>Escolha um cliente: </span>
                <input type="number" id="quantity" name="quantity" min="0" max={listUsuarios.length - 1} defaultValue='0' onChange={e => {setIdUsuario(e.target.value)}}></input>
                <br/>
                <br/>
                {htmlUsuario.current}
            </div>
        </>
    );
}

export default Componente16;