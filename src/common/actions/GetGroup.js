import ActionTypes from '../constants/Action_types'
import Database from '../libs/Database'

function getGroupRequestedAction() {
  return {
    type: ActionTypes.GetGroupRequested,
  }
}

function getGroupRejectedAction() {
  return {
    type: ActionTypes.GetGroupRejected,
  }
}

function getGroupFulfilledAction(group) {
  return {
    type: ActionTypes.GetGroupFulfilled,
    group,
  }
}

export function getGroup(provider, token) {
  return (dispatch) => {
    dispatch(getGroupRequestedAction())
    return new Database().getGroup(provider, token)
    .then((result) => {
      const group = result.val()
      dispatch(getGroupFulfilledAction(group))
    })
    .catch((error) => {
      console.log(error)
      dispatch(getGroupRejectedAction())
    })
  }
}
