import React from 'react'

const input = (props) => {
  return (
    <div>
      <input style={props.style}  type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default input
