import * as types from '../actions/types'

export const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter
    default:
      return state
  }
}
