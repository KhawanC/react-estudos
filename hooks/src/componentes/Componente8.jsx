import React, { useState, useRef } from 'react';

const Componente8 = () => {

    const [listaTarefas, setListaTarefas] = useState(() => {return []})
    const [tarefa, setTarefa] = useState(() => {return ''})

    const idTarefa = useRef(0)

    function adicionarTarefa() {
        setListaTarefas(e => {return [...e, {id: idTarefa.current, texto: tarefa}]})
        idTarefa.current++
        setTarefa('')
    }

    function limparTarefas() {
        setListaTarefas(e => {return []})
        idTarefa.current = 0
    }

    function removerTarefa(id) {
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
                <hr className='hr'/>
                <p>Tarefas: </p>
                {listaTarefas.map(e => {
                    return <div className='componente2'>
                        <span key={e.id}>{e.texto}</span>
                        <button onClick={() => {removerTarefa(e.id)}}>remover</button>
                    </div>
                })}
            </div>
        </>
    )
}

export default Componente8