import React from 'react';
import './Filter.css'
import InputDiscount from '../../components/InputDiscount/InputDiscount';
import CategoriesContainer from '../../containers/Categories'
import InputNumber from '../InputNumber/InputNumber';

const Filter = ({ minPrice, maxPrice, handleChangeMinPrice,
                  handleChangeMaxPrice, discount, handleChangeDiscount  }) => {
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

export default Filter
