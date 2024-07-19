import React from 'react'
import { homeDropDown } from './NavItems'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {homeDropDown.map((home)=>{
        return (
          <li key={home.id}>
<Link to={home.path}>{home.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Home
