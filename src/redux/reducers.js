import { combineReducers } from 'redux'
import RMReducer from './RMReducer'
import Users from './Users'

export default combineReducers({
  rickAndMorty: RMReducer,
  users: Users
})