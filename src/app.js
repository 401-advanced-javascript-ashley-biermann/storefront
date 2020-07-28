import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </>
    )
  }
}