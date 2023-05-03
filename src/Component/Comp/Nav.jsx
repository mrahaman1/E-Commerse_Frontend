import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='nav'>
  <ul>
      <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li></h4>
      <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/mobile'>Mobile</NavLink></li></h4>
      <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/ipad'>Ipad</NavLink></li></h4>
      <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/laptop'>Laptop</NavLink></li></h4>
      <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/macbook'>MacBook</NavLink></li></h4>
  </ul>
    </div>
    </div>
  )
}

export default Nav