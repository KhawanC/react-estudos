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

export const BotaoJogo = styled.div`

display: flex;
gap: 15em;

button {
    color: white;
    width: 120px;
    height: 60px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 15px;

    transition: 1s;
}

button:hover {
    border: 1px solid transparent;
    border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
    border-image-slice: 1;
    animation: rainbow 2.5s linear;
	animation-iteration-count: infinite;
    cursor: pointer;
}

@keyframes rainbow{
		100%,0%{
			color: rgb(255,0,0);
		}
		8%{
			color: rgb(255,127,0);
		}
		16%{
			color: rgb(255,255,0);
		}
		25%{
			color: rgb(127,255,0);
		}
		33%{
			color: rgb(0,255,0);
		}
		41%{
			color: rgb(0,255,127);
		}
		50%{
			color: rgb(0,255,255);
		}
		58%{
			color: rgb(0,127,255);
		}
		66%{
			color: rgb(0,0,255);
		}
		75%{
			color: rgb(127,0,255);
		}
		83%{
			color: rgb(255,0,255);
		}
		91%{
			color: rgb(255,0,127);
		}
}
`

export const Tutorial = styled.div`
display: flex;
flex-direction: column;

margin: 50px;

.tutorialContent {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 40px;

    
}

.tutorialContent input{

    margin-block: 40px;
    margin-inline: 95px;
}

`

export const GameStyled = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 70vh;

.telaInicial {
    margin-top: 45px;
}

.telaInicial .tituloJogo{
    display: flex;
    justify-content: center;
    
    margin-bottom: 15px;

    animation: rainbow 2.5s linear;
	animation-iteration-count: infinite;
}

.textoFinalizadoCerto {
	display: flex;
    justify-content: center;
    
    margin-bottom: 15px;

    animation: rainbow 2.5s linear;
	animation-iteration-count: infinite;
}

.telaInicial .tituloJogo p {
    font-size: 5.5em;
}

.telaInicial .descJogo {
    display: flex;
    justify-content: center;

}

.telaInicial .descJogo p{
    font-size: 1.3em;
}

.botoesInicial {
    display: flex;
    padding-top: 155px;

    gap: 15em;
}

@keyframes rainbow{
		100%,0%{
			color: rgb(255,0,0);
		}
		8%{
			color: rgb(255,127,0);
		}
		16%{
			color: rgb(255,255,0);
		}
		25%{
			color: rgb(127,255,0);
		}
		33%{
			color: rgb(0,255,0);
		}
		41%{
			color: rgb(0,255,127);
		}
		50%{
			color: rgb(0,255,255);
		}
		58%{
			color: rgb(0,127,255);
		}
		66%{
			color: rgb(0,0,255);
		}
		75%{
			color: rgb(127,0,255);
		}
		83%{
			color: rgb(255,0,255);
		}
		91%{
			color: rgb(255,0,127);
		}
}
`