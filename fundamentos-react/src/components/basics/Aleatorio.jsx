import React from 'react'

export default props => {
    
    const { min, max } = props
        
    let aleatorio = parseInt(
        Math.random() * (max - min) + min
    )
    return (
        <div>
            <h2>Número aleatório:</h2>
            <p>
                <strong>Valor mínimo: {min}</strong>
            </p>
            <p>
                <strong>Valor máximo: {max}</strong>
            </p>            
            <p>
                <strong>Valor escolhido: {aleatorio}</strong>
            </p>
        </div>
    )
}