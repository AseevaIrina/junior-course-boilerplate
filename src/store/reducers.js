import { CHANGE_MIN_PRICE, CHANGE_MAX_PRICE, CHANGE_DISCOUNT,
  CHANGE_CATEGORIES, RESET_FILTERS, SET_FROM_HISTORY } from './actions'

import { ToInitialState } from './index'

export default function rootReducer(state, action) {
  switch (action.type) {
    case CHANGE_MIN_PRICE:
      return {...state, minPrice: action.payload }

    case CHANGE_MAX_PRICE:
      return {...state, maxPrice: action.payload }

    case CHANGE_DISCOUNT:
      return {...state, discount: action.payload }

    case CHANGE_CATEGORIES:
      return {...state, selectedCategories: action.payload }

    case RESET_FILTERS:
      return {...ToInitialState,  selectedCategories: [] }

    case SET_FROM_HISTORY:
      return {...state, selectedCategories: action.payload }

    default:
      return state
  }
}
