import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = props => {
  const {
    component: Component,
    ...rest
  } = props

  const userId = localStorage.getItem('userId')

  return (
    <Route
      render={(props) => {
        if (!userId) {
          return <Component {...props} />
        } else {
          return <Redirect to='/bi-react-practice/' />
        }
      }}
      {...rest}
    />
  )
}

const mapStateToProps = state => {
  const {
    loading
  } = state.users

  return {
    loading
  }
}

export default connect(mapStateToProps)(PublicRoute)
