/** 
 * Products
 * @component products
 */

import React from 'react';

// connect let's us opt-in to the store
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

// we need some actions that can be run against our reducer
import { changeCategory } from '../../store/categories.js';
import { filter } from '../../store/products.js';

class Products extends React.Component {
  render() {
    console.log('THIS from products', this);
    return (
        <Paper elevation={2} elementType="div">
          {this.props.products.map(product => <Paper elementType="section">{product.name}</Paper>)}
        </Paper>
    )
  }
}

// tell our connect function add to component props whatever we need from the redux store / state 
// what does MY component need?
const mapStateToProps = state => {
  console.log('state from mapStateToProps in products', state);
  return {
    products: state.products,
  }
}

const mapDispatchToProps = { changeCategory, filter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
