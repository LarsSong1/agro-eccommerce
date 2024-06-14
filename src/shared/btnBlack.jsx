import React from 'react'

function BtnBlack({text, onClick, className}) {
  return (
    <button onClick={onClick} type='submit' className={`btn btn-outline border-white hover:bg-white hover:text-black bg-black text-white ${className}`}>{text}</button>
  )
}

export default BtnBlack