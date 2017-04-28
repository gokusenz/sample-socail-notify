import { combineReducers } from 'redux'
import GroupReducer from './GroupReducer'

const rootReducer = combineReducers({
  group: GroupReducer,
})

export default rootReducer
