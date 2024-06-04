import React from 'react'

function BtnBlack({text, onClick}) {
  return (
    <button onClick={onClick} type='submit' className="btn btn-outline border-white hover:bg-white hover:text-black bg-black text-white mt-2">{text}</button>
  )
}

export default BtnBlack