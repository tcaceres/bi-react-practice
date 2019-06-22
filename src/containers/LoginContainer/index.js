import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginRequest as loginRequestCreator } from '../../redux/Users'
import { loginSuccess as loginSuccessCreator } from '../../redux/Users'
import { loginFail as loginFailCreator } from '../../redux/Users'

const LoginContainer = props => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const { 
    loginRequest,
    loginSuccess,
    loginFail, 
    error, 
    loading,
    users,
    userList
  } = props

  const fakeLogin = (email, password) => {      
    const userId = userList.find(uId => {
      return (
        users[uId].email === email &&
        users[uId].password === password
      )
    })
  
    return {
      userId,
      error: !userId && 'Password o email inválido'
    }
  }

  const login = ({ email, password }) => {
    loginRequest()

    console.log('usuarios:')
    console.log(users)
    console.log('lista de usuarios:')
    console.log(userList)

    const response = fakeLogin(email, password)

    const {
      userId,
      error
    } = response

    if (!error) {
      localStorage.setItem('userId', userId)
      loginSuccess()
    } else {
      loginFail(error)
    }
  }

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={changeHandler} type="email" name="email" value={values["email"]} placeholder="email" />
      <input onChange={changeHandler} type="password" name="password" value={values["password"]} placeholder="password" />
      {error}
      {!loading && <button type='submit'>Entrar</button>}
    </form>
  )
}

const mapDispatchToProps = {
  loginRequest: loginRequestCreator,
  loginSuccess: loginSuccessCreator,
  loginFail: loginFailCreator
}

const mapStateToProps = state => {
  const {
    loading,
    error,
    users,
    userList
  } = state.users

  return {
    loading,
    error,
    users,
    userList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
