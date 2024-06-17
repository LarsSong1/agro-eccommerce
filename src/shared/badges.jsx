import React from 'react'

function Badges({ onClick, text, active }) {
    return (
        <div className={`pt-3 pb-3 text-sm text-center mb-2 rounded-lg cursor-pointer
        ${active ? 'bg-black text-white' : 'bg-customGray text-black'}
        ${text === 'Promotores de Crecimiento' || text === 'Mejoras de Estructura' ? 'w-full': 'w-2/6 grow'}
        
        `

        } onClick={onClick}>{text}</div>
    )
}

export default Badges