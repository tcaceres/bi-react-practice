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
        <PrivateRoute path='/bi-react-practice/' exact component={HomePage} />
        <PrivateRoute path='/bi-react-practice/CharactersList' exact component={CharactersListPage} />
        <PrivateRoute path='/bi-react-practice/EpisodesList' exact component={EpisodesListPage} />
        <PrivateRoute path='/bi-react-practice/CerrarSesion' exact component={LogoutPage} />
        <PublicRoute path='/bi-react-practice/Login' exact component={LoginPage} />
        <PublicRoute path='/bi-react-practice/Register' exact component={RegisterPage} />
      </Switch>
    </Router>
  )
}

export default Routes