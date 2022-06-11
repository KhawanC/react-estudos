import React from 'react';

const ListaEsqueleto = (props) => {

    return(
        <>
            <p>Anotações:</p>
            <p>Lembrar de comprar {props.item} | quantidade: {props.quantidade}</p>
        </>
    )
}

export default ListaEsqueleto