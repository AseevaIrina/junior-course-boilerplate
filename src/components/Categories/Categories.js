import React from 'react';
import './Categories.css';
import { BaseContext } from '../BaseContext/BaseContext';

const Categories  = () => {
  return (
    <BaseContext.Consumer>
      { ({ categoryChangeState, categoryActiveClass }) => (
          <div className="aside-block categories-block">
            <h3 className="aside-block__title">Категории</h3>
            <div className="aside-block__row">
              <button className={`categories-block__switch-btn ${categoryActiveClass('clothes')}`} onClick={categoryChangeState} value='clothes'>Clothes</button>
              <button className={`categories-block__switch-btn ${categoryActiveClass('books')}`} onClick={categoryChangeState} value='books'>Books</button>
            </div>
            <button className="categories-block__btn" onClick={categoryChangeState} value=''>Сбросить фильтры</button>
          </div>
        )
      }
    </BaseContext.Consumer>
  )
}

export default Categories
