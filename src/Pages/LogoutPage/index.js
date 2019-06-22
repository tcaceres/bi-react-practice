import React from 'react'
import { Redirect } from 'react-router-dom'

const LogoutPage = () => {
  localStorage.clear()
  return(
    <Redirect to='/bi-react-practice/Login' />
  )
}

export default LogoutPage
