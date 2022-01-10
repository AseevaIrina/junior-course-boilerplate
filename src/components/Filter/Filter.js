import React, {Component} from 'react';
import './Filter.css'
import InputDiscount from '../../components/InputDiscount/InputDiscount';
import CategoriesContainer from '../../containers/CategoriesContainer'
import InputNumber from '../InputNumber/InputNumber';
import { store } from '../../store';
import { setFromHistory } from '../../store/actions';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    window.history.replaceState({ url: this.state.selectedCategories }, 'category', '?category=' + this.state.selectedCategories);
  }

  setFromHistory = event => {
    const value = event.state['url']
    store.dispatch(setFromHistory(value))
  };

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  render() {

    const {minPrice, maxPrice, handleChangeMinPrice,
      handleChangeMaxPrice, discount, handleChangeDiscount} = this.props

    return (
      <section className="Filter">
        <div className="Filter__block">
          <form>
            <h3 className="Filter__title">Цена</h3>
            <div className="Filter__row">
              <label className="price-block__label">от</label>
              <InputNumber defaultValue={minPrice}
                           onChange={handleChangeMinPrice}
              />
              <label className="price-block__label">до</label>
              <InputNumber defaultValue={maxPrice}
                           onChange={handleChangeMaxPrice}
              />
            </div>
          </form>
        </div>

        <div className="Filter__block discount-block">
          <InputDiscount value={discount}
                         onChange={handleChangeDiscount}
          />
        </div>

        <div className="Filter__block categories-block">
          <CategoriesContainer
          />
        </div>
      </section>
    )
  }
}

export default Filter
