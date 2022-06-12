import React, { useState, useRef } from 'react';

const Componente8 = () => {

    const [listaTarefas, setListaTarefas] = useState(() => {return []})
    const [tarefa, setTarefa] = useState(() => {return ''})
    const [status, setStatus] = useState(() => {return ''})

    const idTarefa = useRef(0)

    function adicionarTarefa() {
        let textIgual
        listaTarefas.forEach(e => {
            if(tarefa === e.texto) {
                textIgual = true
            }
        });
        if (tarefa === '') {
            setStatus(e => {return <p>Status: <span className='statsVerm'>Item vazio!</span></p>})
        } else if(textIgual === true) {
            setStatus(e => {return <p>Status: <span className='statsVerm'>Item repetido!</span></p>})
        } else {
            setStatus(e => {return <p>Status: <span className='statsVerde'>Item criado!</span></p>})
            setListaTarefas(e => {return [...e, {id: idTarefa.current, texto: tarefa}]})
            idTarefa.current++
            setTarefa('')
        }
        
    }

    function limparTarefas() {
        if(listaTarefas.length === 0) {
            setStatus(e => {return <p>Status: <span className='statsAma'>Não há tarefas!</span></p>})
        } else {
            setStatus(e => {return <p>Status: <span className='statsAma'>Itens deletados!</span></p>})
            setListaTarefas(e => {return []})
            idTarefa.current = 0
        }
    }

    function removerTarefa(id) {
        setStatus(e => {return <p>Status: <sapn className='statsAma'>Item  removido!</sapn></p>})
        const filtList = listaTarefas.filter(tarefa => tarefa.id !== id)
        setListaTarefas(filtList)
    }

    return(
        <>
            <div className='componente'>
                <p className='titulo'>To Do List</p>
                <hr className='hr'/>
                <input type="text" value={tarefa} onChange={
                    (evento) => {setTarefa(evento.target.value)}
                }/>
                <div className='botoes'>
                    <button onClick={adicionarTarefa}>Adicionar</button>
                    <button onClick={limparTarefas}>Limpar</button>
                </div>
                {status}
                <hr className='hr'/>
                <p>Tarefas: </p>
                {listaTarefas.map(e => {
                    return <div className='componente2' key={e.id}>
                        <span>{e.texto}</span>
                        <button onClick={() => {removerTarefa(e.id)}}>remover</button>
                    </div>
                })}
            </div>
        </>
    )
}

export default Componente8