import styled from "styled-components";

export const Titulo = styled.p`
font-size: 2.1em;
`;

export const UsuariosDummy = styled.div`
display: flex;
flex-wrap: wrap;

margin-top: 30px;

align-items: center;
justify-content: center;
`;

export const CardAPI = styled.div`
display: flex;

justify-content: space-around;

width: 30em;
height: 12em;
margin: 15px;

border: 1px solid white;



.foto {
    display: flex;

    align-items: center;
    justify-content: center;
}

img {
    width: 10.5em;
    height: 10.5em;
}

.informacoes {
    display: flex;
    flex-direction: column;

    align-items: baseline;
    justify-content: center;
    gap: 10px;
}
`;

export const Componente = styled.div`
background-color: rgb(30, 30, 30);

margin: 20px;

padding-inline: 40px;
padding-block: 20px;

display: flex;

align-items: center;
justify-content: center;

border: 1px solid white;

img {
    width: 15em;
    height: 15em;

    margin: 30px;
}

p {
    font-size: 1.5em;

    margin: 15px;
}
`;