import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import EpisodesTable from '../../components/EpisodesTableRM'
import { getEpisodesRequest as getEpisodesRequestCreator } from '../../redux/RMReducer'
import { getEpisodesSuccess as getEpisodesSuccessCreator } from '../../redux/RMReducer'
import { resetActualPage as resetActualPageCreator } from '../../redux/RMReducer'
import { setFavoritesEpisodes as setFavoritesEpisodesCreator } from '../../redux/Users'


const EpisodesContainer = props => {
  const {
    info,
    episodes,
    favoritesEpisodes,
    userId,
    getEpisodesRequest,
    getEpisodesSuccess,
    resetActualPage,
    setFavoritesEpisodes
  } = props

  const getApi = async (url) => {
    getEpisodesRequest()
  
    const response = await axios.get(url)
      .then(response => {
        // Cuando se resuelve satisfactortiamente la promesa
        getEpisodesSuccess(response.data.info, response.data.results)
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

  const setFavorites = (episodeId) => {
    setFavoritesEpisodes(episodeId, userId)
  }

  useEffect(() => {
    resetActualPage()
    getApi('https://rickandmortyapi.com/api/episode')
  }, [])

  const seeMore = () => {
    getApi(info.next)
  }

  return (
    <div className="index">
      <h2>Rick And Morty Episodes</h2>
      <div className="container">
        <EpisodesTable episodesList={episodes} favorites={favoritesEpisodes} setFav={setFavorites} />
        {info.actualPage < info.pages && <button onClick={seeMore}>Ver más</button>}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const {
    info,
    episodes
  } = state.rickAndMorty

  const {
    users
  } = state.users

  const userId = localStorage.getItem('userId')
  const favoritesEpisodes = users[userId].favoritesEpisodes

  return {
    info,
    episodes,
    favoritesEpisodes,
    userId
  }
}

const mapDispatchToProps = {
  getEpisodesRequest: getEpisodesRequestCreator,
  getEpisodesSuccess: getEpisodesSuccessCreator,
  resetActualPage: resetActualPageCreator,
  setFavoritesEpisodes: setFavoritesEpisodesCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer)