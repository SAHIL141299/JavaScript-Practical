import React from 'react'
import Button from '../componants/custombutton/button'
import Input from '../componants/custominput/input'
import Dropdown from '../componants/customdropdown/dropdown'
// import { homedropdown } from '../utils/options'
import '../App.css'
import { homedropdown } from '../utils/options'

const home = () => {
  return (
    <>
      <h1>Home</h1>
    <div className='componantdata'>
      <Input   style={{padding:"0.3rem"}}  type="text" placeholder="text here"/>
      <Dropdown 
         value={homedropdown}
         />
     <Button label='UPDATE'    
     style={{
       color: "black",
       backgroundColor: "yellow",
       borderRadius:'0.5rem',
       fontSize:'15px',
       fontWeight: '500',
       cursor: 'pointer',
      padding:'0.2rem 3.8rem'
       }}/>
    </div>
    </>
  )
}

export default home
