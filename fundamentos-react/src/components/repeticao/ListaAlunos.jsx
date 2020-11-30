import React from 'react'

import alunos from '../../data/alunos'

export default props => {
    
    const alunosLI = alunos.map( (aluno, i) => {
    
        return (
        <li key={aluno.nome}>
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>
    )
    } )
    
    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {alunosLI}
            </ul>
        </div>

    )
}