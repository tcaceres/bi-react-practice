import React from 'react'

const CharactersTable = ({ charactersList, favorites, setFav }) => {
  return (
    <table className="characters-table">
      <tbody>
        <tr className="character-row">
          <th width="280px" align="left">Name</th>
          <th width="120px" align="left">Status</th>
          <th width="120px" align="left">Species</th>
          <th width="100px" align="left">Image</th>
          <th width="100px" align="left">Favorite</th>
        </tr>
        {charactersList.map((character, index) => {
          const isFavorite = favorites.indexOf(character.id)
          let imgFavorite = ''
          if(isFavorite !== -1) {
            imgFavorite = require('../../images/favorite.jpeg')
          }
          else {
            imgFavorite = require('../../images/noFavorite.png')
          }
          return (
            <tr className="character-row" key={index}>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td><img style={{height: '50px'}} src={character.image} alt=""/></td>
              <td><div className="favoriteCursor" onClick={() => setFav(character.id)}><img style={{height: '25px'}} src={imgFavorite} alt=""/></div></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CharactersTable