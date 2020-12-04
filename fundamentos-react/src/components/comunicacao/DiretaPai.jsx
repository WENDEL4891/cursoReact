import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome='Gustavo' idade={35} bool={true}></DiretaFilho>
            <DiretaFilho nome='Pedro' idade={14} bool={false}></DiretaFilho>
            <DiretaFilho nome='André' idade={20} bool={true}></DiretaFilho>
        </div>
    )
}