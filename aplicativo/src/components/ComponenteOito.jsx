import React from 'react';

const ComponenteOito = (props) => {
    function condicao(){
        if(props.valor >= 10) {
            return <p>Valor é igual ou superior a 10</p>
        } else {
            return <p>Valor é inferior a 10</p>
        }
    }


    function condicao2() {
        switch (props.nome) {
            case "Kaua":
                return <p>{props.nome} sou eu.</p>
                break;
            case "Kian":
                return <p>Definitivamente não sou eu.</p>
                break;
            case "Karina":
                return <p>Acredito que conheço esse nome.</p>
                break;
            case "Kelvin":
                return <p>Talvez em outra vida nos vimos.</p>
                break;
        
            default:
                return <p>Desconheço quem tenha esse nome</p>
                break;
        }
    }

    return(
        <div className="componente">
            <p className='titulo'>
                Titulo: {props.titulo}
            </p>
            {condicao()}
            {condicao2()}
        </div>
    )
}

 export default ComponenteOito   