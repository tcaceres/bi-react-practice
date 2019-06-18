import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import CharactersTable from '../../components/CharactersTableRM'
import { getCharactersRequest as getCharactersRequestCreator } from '../../redux/RMReducer'
import { getCharactersSuccess as getCharactersSuccessCreator } from '../../redux/RMReducer'
import { resetActualPage as resetActualPageCreator } from '../../redux/RMReducer'
import { setFavoritesCharacters as setFavoritesCharactersCreator } from '../../redux/Users'

const CharactersContainer = props => {
  const {
    info,
    characters,
    favoritesCharacters,
    userId,
    getCharactersRequest,
    getCharactersSuccess,
    resetActualPage,
    setFavoritesCharacters
  } = props

  const getApi = async (url) => {
    getCharactersRequest()
  
    const response = await axios.get(url)
      .then(response => {
        // Cuando se resuelve satisfactortiamente la promesa
        getCharactersSuccess(response.data.info, response.data.results)
      })
      .catch(error => {
        // Se manejan los errores cuando falla la petición
        console.log(error)
      })
      .finally(() => {
        // Se ejecuta siempre
      })
  
    return response
  }

  const setFavorites = (characterId) => {
    setFavoritesCharacters(characterId, userId)
  }

  useEffect(() => {
    resetActualPage()
    getApi('https://rickandmortyapi.com/api/character')
  }, [])

  const seeMore = () => {
    getApi(info.next)
  }

  return (
    <div className="index">
      <h2>Rick And Morty Characters</h2>
      <div className="container">
        <CharactersTable charactersList={characters} favorites={favoritesCharacters} setFav={setFavorites}  />
        {info.actualPage < info.pages && <button onClick={seeMore}>Ver más</button>}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const {
    info,
    characters
  } = state.rickAndMorty

  const {
    users
  } = state.users

  const userId = localStorage.getItem('userId')
  const favoritesCharacters = users[userId].favoritesCharacters

  return {
    info,
    characters,
    favoritesCharacters,
    userId
  }
}

const mapDispatchToProps = {
  getCharactersRequest: getCharactersRequestCreator,
  getCharactersSuccess: getCharactersSuccessCreator,
  resetActualPage: resetActualPageCreator,
  setFavoritesCharacters: setFavoritesCharactersCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)