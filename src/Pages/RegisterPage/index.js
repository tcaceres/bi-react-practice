import React from 'react'
import { Link } from 'react-router-dom'
import RegisterContainer from '../../containers/RegisterContainer'

const RegisterPage = () => {
  return (
    <div>
      <RegisterContainer />
      <Link to='/bi-react-practice/Login'>Volver</Link>
    </div>
  )
}

export default RegisterPage