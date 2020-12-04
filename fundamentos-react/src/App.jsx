import React from 'react'
import './App.css'

import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () =>
    <div className='App'>
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card titulo='#09 - Comunicação Direta' color='#FF5108'>
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo='#08 - Renderização Condicional' color='#FF5108'>
                <ParOuImpar numero={21} ></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ nome: 'Gustavo' }} />
                <UsuarioInfo usuario={{ email: 'fer@nando' }} />
                <UsuarioInfo />
            </Card>
            <Card titulo='#07 - Desafio Produtos' color='#4AAAA5'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo='#06 - Repeticao' color='#35404F'>
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo='#05 - Componente com filho' color='#982395'>
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Maria' />
                    <FamiliaMembro nome='José' />
                </Familia>
            </Card>
            <Card titulo='#04 - Desafio aleatório' color='#FFA200'>
                <Aleatorio min={1} max={10} />
            </Card>
            <Card titulo='#03 - Fragmento' color='#00A03E'>
                <Fragmento />
            </Card>
            <Card titulo='#02 - Com parâmetro' color='#24A8AC'>
                <ComParametro
                    titulo='Situação do aluno'
                    aluno='Pedro Silva' nota='6.3'
                />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color='#0087CB'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>