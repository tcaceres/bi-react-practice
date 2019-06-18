import React from 'react'

const EpisodesTable = ({ episodesList, favorites, setFav }) => (
  <table className="characters-table">
    <tbody>
      <tr className="character-row">
        <th width="350px" align="left">Name</th>
        <th width="200px" align="left">Air Data</th>
        <th width="100px" align="left">Episode</th>
        <th width="100px" align="left">Favorite</th>
        <th></th>
      </tr>
      {episodesList.map((episode, index) => {
        const isFavorite = favorites.indexOf(episode.id)
        let imgFavorite = ''
        if(isFavorite !== -1) {
          imgFavorite = require('../../images/favorite.jpeg')
        }
        else {
          imgFavorite = require('../../images/noFavorite.png')
        }
        return (
          <tr className="character-row" key={index}>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
            <td style={{height: '50px'}}>{episode.episode}</td>
            <td><div className="favoriteCursor" onClick={() => setFav(episode.id)}><img style={{height: '25px'}} src={imgFavorite} alt=""/></div></td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default EpisodesTable