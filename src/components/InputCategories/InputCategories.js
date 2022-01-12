import React from 'react';
import './InputCategories.css'

const InputCategories = ({ selectedCategories, value, onChange }) => {
  return (
    <label className="checkbox">
      <input checked={selectedCategories.includes(value)}
             type="checkbox"
             value={value}
             onChange={onChange}
             className="checkbox__input" />
      <span className="checkbox__text">{value}</span>
    </label>
  )
}

export default InputCategories
