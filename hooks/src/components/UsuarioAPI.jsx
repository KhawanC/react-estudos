import React from "react";

const UsuarioAPI = ({usr}) => {
  return (
    <>
      <div className='componente'>
        <p>Nome: {usr.firstName + " " + usr.lastName}</p>
        <p>Aniversário: {usr.birthDate}</p>
        <p>
          Endereço:{" "}
          {usr.address.city +
            " " +
            usr.address.state +
            " - " +
            usr.address.address}
        </p>
      </div>
    </>
  );
};

export default UsuarioAPI;
