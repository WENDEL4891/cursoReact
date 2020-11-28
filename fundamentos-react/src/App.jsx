import React from 'react'

import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () =>
    <div id='app'>
        <Aleatorio
            min = {13}
            max = {19}
        />
        <h1>Fundamentos React </h1>
        <Fragmento />
        <ComParametro
            titulo='Situação do aluno'
            aluno='Pedro Silva' nota='6.3'
        />
        <ComParametro
            titulo='Situação do aluno'
            aluno='Maria'
            nota='9.9'
        />
        <Primeiro></Primeiro>
            ------------------
    </div>