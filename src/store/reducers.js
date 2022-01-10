import { CHANGE_MIN_PRICE, CHANGE_MAX_PRICE, CHANGE_DISCOUNT, CHANGE_CATEGORIES, RESET_FILTERS } from './actions'
import { maxBy, minBy } from 'csssr-school-utils';
import data from '../products.json';

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
      return {...state,
        minPrice: minBy(obj => obj.price, data).price,
        maxPrice: maxBy(obj => obj.price, data).price,
        discount: minBy(obj => obj.discount, data).discount,
        filteredProducts: data,
        selectedCategories: []
      }

    default:
      return state
  }
}
