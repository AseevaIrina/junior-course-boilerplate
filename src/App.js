import React from 'react'
import './index.css';
import FilterContainer from './containers/FilterContainer'
import MainTitle from './components/MainTitle/MainTitle';
import ListContainer from './containers/ListContainer';

const App = () => {
  return (
    <div className="main">
      <FilterContainer />

      <main className="main__section">
        <MainTitle title="Список товаров" />

        <ListContainer />
      </main>
    </div>
  );
}

export default App
