import {connect} from 'react-redux';
import { changeCategories, resetFilters } from '../store/actions';
import Categories from '../components/Categories/Categories';

const mapStateToProps = (state) => {
  return {
    selectedCategories: state.selectedCategories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCategories: (event, selectedCategories) => {
      const value = event.target.value
      let selected = []

      if (selectedCategories.includes( value )) {
        selected = selectedCategories.filter(( item ) => item !== value)
      }
      else {
        selected = [...selectedCategories, value]
      }

      dispatch(changeCategories(selected))
      window.history.pushState({ url: selected }, 'category', '?category=' + selected )
    },
    handleResetFilters: (selectedCategories) => {
      dispatch(resetFilters())
      window.history.pushState( { url: selectedCategories }, 'category', '?category=' )
    }
  }
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);
export default CategoriesContainer
