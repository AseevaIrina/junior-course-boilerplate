import React from 'react';
import './CardsList.css';
import ProductCard from '../ProductCard/ProductCard';

const CardsList = ({ filteredProducts }) => {
  return (
    <ul className="cards-list">
      {
        filteredProducts.map( (listItem, index) => {
          return (
            <li className="cards-list__item" key={index}>
              <ProductCard key={listItem.id}
                           isInStock={listItem.isInStock}
                           img={listItem.img}
                           title={listItem.title}
                           price={listItem.price}
                           subPriceContent={''}
                           maxRating={listItem.maxRating}
                           rating={listItem.rating}
              />
            </li>
          )
        })
      }
    </ul>
  );
}

export default CardsList


