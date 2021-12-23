import React from 'react';
import './Categories.css';
import { BaseContext } from '../BaseContext/BaseContext';
import InputCategories from '../InputCategories/InputCategories'

class Categories extends React.Component {
  render() {
    return (
      <BaseContext.Consumer>
        { ({ categoryChangeState }) => (
          <div className="aside-block categories-block">
            <h3 className="aside-block__title">Категории</h3>
            <div className="aside-block__row">
              <InputCategories value="Clothes" />
              <InputCategories value="Books" />
            </div>
            <button className="categories-block__btn" onClick={categoryChangeState} value=''>Сбросить фильтры</button>
          </div>
        )}
      </BaseContext.Consumer>
    )
  }
}

export default Categories
