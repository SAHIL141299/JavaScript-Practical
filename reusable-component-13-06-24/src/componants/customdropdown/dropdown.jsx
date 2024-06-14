import React from 'react'

const dropdown = (props) => {
  return (
    <div >
      <select className='dopdowncutomcomponant' >
        {props.value.map((item) =>{
          return  <option style={props.style} key={item.value}>{item.option}</option>
        })}
      </select>
    </div>
  )
}

export default dropdown
