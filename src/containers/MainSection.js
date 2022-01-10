import {connect} from 'react-redux';
import data from '../products.json';
import Main from '../components/Main/Main';
import memoize from '../utils/memoize';
import { maxBy, minBy } from 'csssr-school-utils';

const filterProducts = memoize(( data, minPrice, maxPrice, discount, selectedCategories ) => {
  return data.filter((item) => {
    if (selectedCategories.length > 0) {
      return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount && selectedCategories.includes(item.category)
    }
    else {
      console.log(selectedCategories.length)
      return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount
    }
  })
})

const mapStateToProps = (state) => {
  return {
    minPrice: minBy(obj => obj.price, data).price,
    maxPrice: maxBy(obj => obj.price, data).price,
    discount: minBy(obj => obj.discount, data).discount,
    filteredProducts: filterProducts(data, state.minPrice, state.maxPrice, state.discount, state.selectedCategories),
    selectedCategories: state.selectedCategories
  }
}

const MainSection = connect(mapStateToProps)(Main)

export default MainSection
