import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'



ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        ------------------
        <ComParametro
            titulo='Situação do aluno'
            aluno='Pedro Silva' nota='6.3'
        />
        <ComParametro
            titulo='Situação do aluno'
            aluno='Maria'
            nota='9.9'
        />
        <Fragmento />
    </div>,
    document.getElementById('root')
)