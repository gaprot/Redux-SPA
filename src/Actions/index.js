// Action Creators.
import * as types from '../constants/ActionTypes'

export const page1 = () => {
  console.log("page1");
  return {type: types.PAGE1}
}

export const page2 = () => {
  console.log("page2");
  return {type: types.PAGE2}
}

export const page3 = () => {
  console.log("page3");
  return {type: types.PAGE3}
}

export const page4 = () => {
  console.log("page4");
  return {type: types.PAGE4}
}