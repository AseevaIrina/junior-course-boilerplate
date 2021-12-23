import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';
import { minBy, maxBy } from 'csssr-school-utils';

import MainTitle from './components/MainTitle/MainTitle';
import CardsList from './components/CardsList/CardsList';
import PriceBlock from './components/PriceBlock/PriceBlock';
import InputDiscount from './components/InputDiscount/InputDiscount';
import Categories from './components/Categories/Categories';
import memoize from './utils/memoize';

import './index.css';
import { BaseContext } from './components/BaseContext/BaseContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    const urlFilterParams = decodeURIComponent(window.location.search);

    this.state = {
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price,
      discount: minBy(obj => obj.discount, data).discount,
      filteredProducts: data,
      selectedCategories: this.getSelectedCategoryFromUrl(urlFilterParams)
    };

    window.history.replaceState({ url: this.state.selectedCategories }, 'category', '?category=' + this.state.selectedCategories);
  }

  getSelectedCategoryFromUrl = (url) => {
    let parseUrl = url.split('=')
    parseUrl = parseUrl.pop()
    return url ? parseUrl.split(',') : []
  };

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = event => {
    const url = event.state['url']
    this.setState({ selectedCategories: url });
  };

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  handleChangeState = ( name, filteredValue ) => {
    this.setState({[name]: filteredValue});
  }

  categoryChangeState = (event) => {
    const value = event.target.value
    const selectedCategories = this.state.selectedCategories
    let selected = []
    if (selectedCategories.includes( value )) {
      selected = selectedCategories.filter(( item ) => item !== value)
    } else if ( value === '' ) {
      this.setState({selectedCategories: ''})
      window.history.pushState({ url: selected }, 'category', '?category=' )
    }
    else {
      selected = [...selectedCategories, value]
    }
    this.setState({selectedCategories: selected})
    window.history.pushState({ url: selected }, 'category', '?category=' + selected )
  }

  filterProducts = memoize(( data, minPrice, maxPrice, discount, selectedCategories ) => {
    return data.filter( (item) => {
      if (selectedCategories !== '') {
        return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
      }
      else {
        return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount
      }
    })
  })

  render() {
    return (
      <BaseContext.Provider value={
        { ...this.state, categoryChangeState:this.categoryChangeState,
          inputMinValue: this.state.minPrice,
          inputMaxValue: this.state.maxPrice,
          discount: this.state.discount,
          handleChangeState: this.handleChangeState,
          listProducts: this.filterProducts(this.state.filteredProducts,
            this.state.minPrice, this.state.maxPrice, this.state.discount, this.state.selectedCategories),
          selectedCategories: this.state.selectedCategories
        }
      }>
        <div className="main">
          <section className="aside-section">
            <PriceBlock />

            <div className="aside-block discount-block">
              <InputDiscount onChange={this.handleChangeState}/>
            </div>

            <Categories/>
          </section>

          <section className="main-section">
            <MainTitle title="Список товаров" />

            <CardsList />
          </section>
        </div>
      </BaseContext.Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
