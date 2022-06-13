import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Atividades from "../pages/Atividades";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import SobreMim from "../pages/SobreMim";

function Root(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/atividades' element={<Atividades />} />
                <Route path='/sobre_mim' element={<SobreMim />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Root;