import React from 'react'

const Underline = (props) => {
  let className = `w-[60px] h-[4px] ${props.color}`
  return (
    <div className={className}></div>
  )
}

export default Underline;