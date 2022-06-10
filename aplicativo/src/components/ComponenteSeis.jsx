import React from 'react';
import clientes from "../dados_cliente/dados_cliente"

const ComponenteSeis = (props) => {

    function cliente() {
        return clientes.map(cliente => {
            return <li key={cliente.id}>Nome: {cliente.nome} | Email: {cliente.email}</li>
        })
    }
 
    return(
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>
            <ul className='listaClientes'>
                {cliente()}
            </ul>
        </div>
    )
}

export default ComponenteSeis