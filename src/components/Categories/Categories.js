import React from 'react';
import './Categories.css';
import { BaseContext } from '../BaseContext/BaseContext';
import cn from 'classnames'

class Categories extends React.Component {
  render() {
    return (
      <BaseContext.Consumer>
        { ({ categoryChangeState, activeCategoryBtn }) => (
          <div className="aside-block categories-block">
            <h3 className="aside-block__title">Категории</h3>
            <div className="aside-block__row">
              <button className={cn('categories-block__switch-btn', {'is-active':activeCategoryBtn === 'clothes'})} onClick={categoryChangeState} value='clothes'>Clothes</button>
              <button className={cn('categories-block__switch-btn', {'is-active':activeCategoryBtn === 'books'})} onClick={categoryChangeState} value='books'>Books</button>
            </div>
            <button className="categories-block__btn" onClick={categoryChangeState} value=''>Сбросить фильтры</button>
          </div>
        )
        }
      </BaseContext.Consumer>
    )
  }
}

export default Categories
