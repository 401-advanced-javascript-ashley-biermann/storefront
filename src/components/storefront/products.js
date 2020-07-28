/** 
 * Products
 * @component products
 */



import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

import { changeCategory } from '../../store/categories.js';
import { filter } from '../../store/products.js';

class Products extends React.Component {
  render() {
    console.log('props from Products', this.props)
    return (
        <Paper elevation={2} elementType="div">
          <Paper elementType="section">Section 1</Paper>
          <Paper elementType="section">Section 2</Paper>
          <Paper elementType="section">Section 3</Paper>
        </Paper>
    )
  }
}

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
