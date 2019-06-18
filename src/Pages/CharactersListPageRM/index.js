import React from 'react'
import CharactersContainer from '../../containers/CharactersContainerRM'
import MenuRM from '../../components/MenuRM';

const CharactersListPage = () => {
  return (
    <div>
      <MenuRM />
      <CharactersContainer />
    </div>
  )
}

export default CharactersListPage