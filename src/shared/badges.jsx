import React from 'react'

function Badges({ onClick, text, active }) {
    return (
        <div className={`pt-3 pb-3 text-sm text-center mb-2 rounded-lg cursor-pointer grow
        ${active ? 'bg-black text-white' : 'bg-customGray text-black'} `

        } onClick={onClick}>{text}</div>
    )
}

export default Badges