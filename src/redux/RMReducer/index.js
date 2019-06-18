const CHARACTERS_REQUEST = "CHARACTERS_REQUEST"
const CHARACTERS_SUCCESS = "CHARACTERS_SUCCESS"
const EPISODES_REQUEST = "EPISODES_REQUEST"
const EPISODES_SUCCESS = "EPISODES_SUCCESS"
const RESET_ACTUALPAGE = "RESET_ACTUALPAGE" 

export const getCharactersRequest = () => ({ type: CHARACTERS_REQUEST })

export const getCharactersSuccess = (info, characters) => {
  return ({
    type: CHARACTERS_SUCCESS,
    payload: {
      info,
      characters
    }
  })
}

export const getEpisodesRequest = () => ({ type: EPISODES_REQUEST })

export const getEpisodesSuccess = (info, episodes) => {
  return ({
    type: EPISODES_SUCCESS,
    payload: {
      info,
      episodes
    }
  })
}

export const resetActualPage = () => ({ type: RESET_ACTUALPAGE })

const initialState = {
  info: {
    count: 0,
    next: '',
    prev: '',
    pages: 0,
    actualPage: 0
  },
  characters: [],
  episodes: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case CHARACTERS_SUCCESS: {
      const { count, next, prev, pages } = action.payload.info
      
      return {
        ...state,
        info: {
          ...state.info,
          count,
          next,
          prev,
          pages,
          actualPage: state.info.actualPage + 1
        },
        characters: [...state.characters, ...action.payload.characters],
        episodes: [],
        loading: false,
        error: null
      }
    }
    case EPISODES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case EPISODES_SUCCESS: {
      const { count, next, prev, pages } = action.payload.info

      return {
        ...state,
        info: {
          ...state.info,
          count,
          next,
          prev,
          pages,
          actualPage: state.info.actualPage + 1
        },
        characters: [],
        episodes: [...state.episodes, ...action.payload.episodes],
        loading: false,
        error: null
      }
    }
    case RESET_ACTUALPAGE: {
      return {
        ...state,
        info: {
          ...state.info,
          actualPage: 0
        }
      }
    }
    default: {
    }
  }

  return state
}