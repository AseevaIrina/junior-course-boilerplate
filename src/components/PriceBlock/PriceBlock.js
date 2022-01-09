import React from 'react';
import './PriceBlock.css';
import { BaseContext } from '../BaseContext/BaseContext';
import InputNumber from '../InputNumber/InputNumber';



const PriceBlock  = () => {
  return (
    <BaseContext.Consumer>
      {( { inputMinValue, inputMaxValue, handleChangeState }) => (
        <form className="aside-block price-block">
          <h3 className="aside-block__title">Цена</h3>
          <div className="aside-block__row">
            <label className="price-block__label">от</label>
            <InputNumber defaultValue={inputMinValue} name='minPrice' onChange={handleChangeState} />
            <label className="price-block__label">до</label>
            <InputNumber defaultValue={inputMaxValue} name='maxPrice' onChange={handleChangeState} />
          </div>
        </form>
        )
      }
    </BaseContext.Consumer>
  );
}

export default PriceBlock
