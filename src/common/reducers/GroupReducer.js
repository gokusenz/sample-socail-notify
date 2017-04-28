import ActionTypes from '../constants/Action_types'

const initialState = []

const GroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GetGroupRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: '',
      })
    }
    case ActionTypes.GetGroupRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting Group',
      })
    }
    case ActionTypes.GetGroupFulfilled: {
      return Object.assign({}, state, {
        inProgress: false,
        success: 'Got group',
        group: action.group,
      })
    }
    case ActionTypes.ResetGroup: {
      return Object.assign({}, state, {
        inProgress: false,
        success: '',
        group: {
          name: '',
          token: '',
          description: '',
        },
      })
    }
    default:
      return state
  }
}

export default GroupReducer
