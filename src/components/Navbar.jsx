import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import "./NavBar.css"

function Navbar() {
  const [searche, setsearch] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searche) return

    navigate(`/search?q=${searche}`);
    setsearch("");
  }

  return (
    <div>
       <nav id='navbar'>
        <h2>
          <Link exect to="/"><BiCameraMovie />Movieslib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setsearch(e.target.value)} value={searche}/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>

      </nav>  
      
    </div>
  )
}

export default Navbar
