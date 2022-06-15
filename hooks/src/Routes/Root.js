import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Atividades from "../pages/Atividades";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import SobreMim from "../pages/SobreMim";
import TypeGame from '../pages/TypeGame';

function Root(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/atividades' element={<Atividades />} />
                <Route path='/sobre_mim/:nome&:atb0&:atb1&:atb2&:atb3&:atb4' element={<SobreMim />} />
                <Route path='/sobre_mim' element={<SobreMim />} />
                <Route path='/game' element={<TypeGame/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Root;