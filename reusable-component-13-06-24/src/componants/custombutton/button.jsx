import React from 'react'

const button = (props) => {
  return (
    <div>
      <button   style={props.style} >{props.label}</button>
    </div>
  )
}

export default button
