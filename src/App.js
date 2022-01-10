import React from 'react';
import {connect} from 'react-redux'
import './index.css';
import { store } from './store/index'
import AsideSection from './containers/AsideSection'
import MainSection from './containers/MainSection'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();

    window.history.replaceState({ url: this.state.selectedCategories }, 'category', '?category=' + this.state.selectedCategories);
  }

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

  render() {
    return (
      <div className="main">
        <AsideSection />

        <MainSection />
      </div>
    );
  }
}

export default connect()(App)
