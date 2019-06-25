import React from 'react'
import {
  Link
} from 'react-router-dom' 

const MenuRM = () => {
    return(
      <div>
        <Link to='/bi-react-practice/'>🏠 Rick And Morty |</Link>
        <Link to='/bi-react-practice/CharactersList'>Characters |</Link>
        <Link to='/bi-react-practice/EpisodesList'>Episodes |</Link>
        <Link to='/bi-react-practice/CerrarSesion'>Cerrar Sesión</Link>        
      </div>
    )
  }
  
  export default MenuRM