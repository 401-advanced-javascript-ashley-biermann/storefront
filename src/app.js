import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import SimpleCart from './components/cart/simplecart.js';

// Setting up the global state
import { Provider } from 'react-redux';

// if goes to folder, it will default to look at index.js
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Header />
          <Categories />
          <SimpleCart />
          <Products />
          <Footer />
        </Provider>
      </>
    )
  }
}