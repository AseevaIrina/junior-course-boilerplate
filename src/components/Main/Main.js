import React from 'react';
import './Main.css';
import MainTitle from '../../components/MainTitle/MainTitle';
import CardsList from '../CardsList/CardsList';

const Main = ({ filteredProducts }) => {
  return (
    <section className="MainSection">
      <MainTitle title="Список товаров" />

      <CardsList filteredProducts={filteredProducts} />
    </section>
  )
}

export default Main
