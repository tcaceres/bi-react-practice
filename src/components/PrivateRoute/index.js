import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = props => {
  const {
    component: Component,
    ...rest
  } = props

  const userId = localStorage.getItem('userId')

  return (
    <Route
      render={(props) => {
        if (userId) {
          return <Component {...props} />
        } else {
          return <Redirect to='/bi-react-practice/Login' />
        }
      }}
      {...rest}
    />
  )
}

export default PrivateRoute
