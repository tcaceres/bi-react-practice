import React from 'react'
import { Link } from 'react-router-dom'
import LoginContainer from '../../containers/LoginContainer'

const LoginPage = () => {
  return (
    <div>
      <LoginContainer />
      <Link to='/register'>Registrarse</Link>
    </div>
  )
}

export default LoginPage
