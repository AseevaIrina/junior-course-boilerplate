import React from 'react';
import './CardsList.css';
import ProductCard from '../ProductCard/ProductCard';
import { BaseContext } from '../BaseContext/BaseContext';

const CardsList = () => {
  return (
    <BaseContext.Consumer>
      {
        ({ listProducts }) => (
          <ul className="cards-list">
            {
              listProducts.map( (listItem, index) => {
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
        )
      }
    </BaseContext.Consumer>
  );
}

export default CardsList


