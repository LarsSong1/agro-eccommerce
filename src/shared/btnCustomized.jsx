import React from 'react'

function BtnCustomized({className, onClick, text}) {
  return (
    <div onClick={onClick} className={className}>{text}</div>
  )
}

export default BtnCustomized