import React from 'react'
import {
  Link
} from 'react-router-dom' 

const MenuRM = () => {
    return(
      <div>
        <Link to='/'>🏠 Rick And Morty | </Link>
        <Link to='/CharactersList'>Characters | </Link>
        <Link to='/EpisodesList'>Episodes | </Link>
        <Link to='/CerrarSesion'>Cerrar Sesión</Link>        
      </div>
    )
  }
  
  export default MenuRM