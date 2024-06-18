import React from 'react'

function Flex({className, onClick, children}) {
  return (
    <div onClick={onClick} className={className}>{children}</div>
  )
}

export default Flex