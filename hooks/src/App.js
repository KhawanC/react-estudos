import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Atividades from "./pages/Atividades";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";

function App() {

  const nav = useNavigate()

  return (
    <>
      <nav className="navegacao">
        <button onClick={() => nav('/')}>Tela inicial</button>
        <button onClick={() => nav('/atividades')}>Atividades</button>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/atividades' element={<Atividades />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App;
