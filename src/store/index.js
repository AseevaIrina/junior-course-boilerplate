import { createStore } from 'redux';
import rootReducer from './reducers';
import { maxBy, minBy } from 'csssr-school-utils';
import data from '../products.json';

const urlFilterParams = decodeURIComponent(window.location.search);

const getSelectedCategoryFromUrl = (url) => {
  let parseUrl = url.split('=')
  parseUrl = parseUrl.pop()
  return parseUrl ? parseUrl.split(',') : []
};

const initialState = {
  minPrice: minBy(obj => obj.price, data).price,
  maxPrice: maxBy(obj => obj.price, data).price,
  discount: minBy(obj => obj.discount, data).discount,
  filteredProducts: data,
  selectedCategories: getSelectedCategoryFromUrl(urlFilterParams)
}

export const ToInitialState = initialState

export const store = createStore(rootReducer, initialState)
