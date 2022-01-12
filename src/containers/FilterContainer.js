import {connect} from 'react-redux';
import { changeMinPrice, changeMaxPrice, changeDiscount } from '../store/actions';
import Filter from '../components/Filter/Filter';
import { toInt } from 'csssr-school-utils';

const mapStateToProps = (state) => {
  return {
    maxPrice: state.maxPrice,
    minPrice: state.minPrice,
    discount: state.discount
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeMinPrice: (event) => {
      const value = toInt(event.target.value);
      dispatch(changeMinPrice(value))
    },
    handleChangeMaxPrice: (event) => {
      const value = toInt(event.target.value);
      dispatch(changeMaxPrice(value))
    },
    handleChangeDiscount: (event) => {
      const value = toInt(event.target.value);
      dispatch(changeDiscount(value))
    }
  }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer
