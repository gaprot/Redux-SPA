// Reducer.
import {PAGE1, PAGE2, PAGE3, PAGE4} from '../constants/ActionTypes'

const initialState = {value: 'PAGE1'}

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case PAGE1:
      return {value: 'PAGE1'}
    case PAGE2:
      return {value: 'PAGE2'}
    case PAGE3:
      return {value: 'PAGE3'}
    case PAGE4:
      return {value: 'PAGE4'}
    default:
      return state
  }
}