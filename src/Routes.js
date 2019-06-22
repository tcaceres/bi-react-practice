import React from 'react'
import {
  BrowserRouter as Router,
  //Link,
  //Route,
  Switch
} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CharactersListPage from './Pages/CharactersListPageRM'
import EpisodesListPage from './Pages/EpisodesListPageRM'
import LoginPage from './Pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import LogoutPage from './Pages/LogoutPage'
import RegisterPage from './Pages/RegisterPage'

const Routes = () => {
  return(
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={HomePage} />
        <PrivateRoute path='/CharactersList' exact component={CharactersListPage} />
        <PrivateRoute path='/EpisodesList' exact component={EpisodesListPage} />
        <PrivateRoute path='/CerrarSesion' exact component={LogoutPage} />
        <PublicRoute path='/Login' exact component={LoginPage} />
        <PublicRoute path='/Register' exact component={RegisterPage} />
      </Switch>
    </Router>
  )
}

export default Routes