import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerRequest as registerRequestCreator } from '../../redux/Users'
import { registerSuccess as registerSuccessCreator } from '../../redux/Users'
import { registerFail as registerFailCreator } from '../../redux/Users'

const RegisterContainer = props => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: ''
  })

  const { 
    registerRequest,
    registerSuccess,
    registerFail, 
    loading,
    error,
    users,
    userList
  } = props

  const existUser = (email) => {  
    const userId = userList.find(uId => users[uId].email === email)
  
    return {
      error: userId && 'Usuario ya existe, intente con otro correo'
    }
  }

  const registerUser = ({ email, password, name }) => {
    registerRequest()

    const response = existUser(email)
    const { error } = response

    if (!error) {
      registerSuccess(email, password, name)
    } else {
      registerFail(error)
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
    registerUser(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={changeHandler} type="name" name="name" value={values["name"]} placeholder="name" />
      <input onChange={changeHandler} type="email" name="email" value={values["email"]} placeholder="email" />
      <input onChange={changeHandler} type="password" name="password" value={values["password"]} placeholder="password" />
      {error}
      {!loading && <button type='submit'>Registrar</button>}
    </form>
  )
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

const mapDispatchToProps = {
  registerRequest: registerRequestCreator,
  registerSuccess: registerSuccessCreator,
  registerFail: registerFailCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
