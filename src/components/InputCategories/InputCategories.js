import React from 'react';
import { BaseContext } from '../BaseContext/BaseContext';
import './InputCategories.css'

const InputCategories = ( {value} ) => {
  return (
    <BaseContext.Consumer>
      {
        ({ categoryChangeState, selectedCategories }) => (
          <label className="checkbox">
            <input checked={selectedCategories.includes(value)}
                   type="checkbox"
                   value={value}
                   onChange={categoryChangeState}
                   className="checkbox__input" />
            <span className="checkbox__text">{value}</span>
          </label>
        )}
    </BaseContext.Consumer>
  )
}

export default InputCategories
