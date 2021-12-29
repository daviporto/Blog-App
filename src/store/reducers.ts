import { combineReducers } from 'redux'
import userReducer from './user'

const RootReducer = combineReducers({
  users: userReducer
})

export default RootReducer