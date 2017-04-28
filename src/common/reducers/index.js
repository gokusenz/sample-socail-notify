import { combineReducers } from 'redux'
import FieldReducer from './FieldReducer'
import GroupReducer from './GroupReducer'

const rootReducer = combineReducers({
  field: FieldReducer,
  group: GroupReducer,
})

export default rootReducer
