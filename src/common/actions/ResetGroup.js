import ActionTypes from '../constants/Action_types'

function reset() {
  return {
    type: ActionTypes.ResetGroup,
  }
}

export function resetGroup() {
  return dispatch => dispatch(reset())
}
