
import * as types from './types'

export function onFilter (filter) {
  return {
    type: types.FILTER,
    filter
  }
}
