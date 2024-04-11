import React from 'react'

// children -> will wrap whatever you pass "inside" whatever you've defined (div, section ...)
const Card = ( { children, bg = 'bg-gray-100' } ) => {
  return (
    <div className= {`${bg} p-6 rounded-lg shadow-md`} >{ children }</div>
  )
}

export default Card