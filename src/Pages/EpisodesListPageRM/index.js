import React from 'react'
import EpisodesContainer from '../../containers/EpisodesContainerRM'
import MenuRM from '../../components/MenuRM';

const EpisodesListPage = () => {
  return (
    <div>
      <MenuRM />
      <EpisodesContainer />
    </div>
  )
}

export default EpisodesListPage