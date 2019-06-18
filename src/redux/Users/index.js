const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const FAV_CHARACTERS = 'FAV_CHARACTERS'
const FAV_EPISODES = 'FAV_EPISODES'

export const loginSuccess = () =>({ type: LOGIN_SUCCESS })

export const loginRequest = () =>({ type: LOGIN_REQUEST })

export const loginFail = error =>({
  type: LOGIN_FAIL,
  payload: {
    error
  }
})

export const setFavoritesCharacters = (id, user) =>({
  type: FAV_CHARACTERS,
  payload: {
    id,
    user
  }
})

export const setFavoritesEpisodes = (id, user) =>({
  type: FAV_EPISODES,
  payload: {
    id,
    user
  }
})

const initialState = {
  loading: false,
  error: null,
  users: {
    '1': {
      id: '1',
      email: 'usuario1@prueba.com',
      password: '123',
      name: 'Usuario1',
      favoritesCharacters: [],
      favoritesEpisodes: []
    },
    '2': {
      id: '2',
      email: 'usuario2@prueba.com',
      password: '123',
      name: 'Usuario2',
      favoritesCharacters: [],
      favoritesEpisodes: []
    },
    '3': {
      id: '3',
      email: 'usuario3@prueba.com',
      password: '123',
      name: 'Usuario3',
      favoritesCharacters: [],
      favoritesEpisodes: []
    }
  },
  userList: ['1', '2', '3']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      }
    }
    case LOGIN_FAIL: {
      const { error } = action.payload

      return {
        ...state,
        loading: false,
        error
      }
    }
    case FAV_CHARACTERS: {
      const { id, user } = action.payload

      let favCharacters = state.users[user].favoritesCharacters
      const isFavorite = favCharacters.indexOf(id)

      if(isFavorite !== -1) {
        favCharacters = favCharacters.filter(idCharacter => idCharacter !== id)
      }
      else {
        favCharacters = [...favCharacters, id]
      }

      return {
        ...state,
        users: {
          ...state.users,
          [user]: {
            ...state.users[user],
            favoritesCharacters: favCharacters
          }          
        }        
      }
    }
    case FAV_EPISODES: {
      const { id, user } = action.payload

      let favEpisodes = state.users[user].favoritesEpisodes
      const isFavorite = favEpisodes.indexOf(id)

      if(isFavorite !== -1) {
        favEpisodes = favEpisodes.filter(idEpisode => idEpisode !== id)
      }
      else {
        favEpisodes = [...favEpisodes, id]
      }

      return {
        ...state,
        users: {
          ...state.users,
          [user]: {
            ...state.users[user],
            favoritesEpisodes: favEpisodes
          }          
        }        
      }
    }
    default: return state
  }
}