import React from 'react';
import './Categories.css';
import InputCategories from '../InputCategories/InputCategories'

const Categories = props => {
  const { selectedCategories } = props;

  const handleChangeCategories = (event) => {
    props.handleChangeCategories(event, selectedCategories)
  }
  const handleResetFilters = () => {
    props.handleResetFilters(selectedCategories)
  }


  return (
    <>
      <h3 className="Filter__title">Категории</h3>
      <div className="Filter__row">
        <InputCategories value="Clothes" onChange={handleChangeCategories} selectedCategories={selectedCategories} />
        <InputCategories value="Books" onChange={handleChangeCategories} selectedCategories={selectedCategories} />
      </div>
      <button className="categories-block__btn" onClick={handleResetFilters}>Сбросить фильтры</button>
    </>
  )
}

export default Categories
