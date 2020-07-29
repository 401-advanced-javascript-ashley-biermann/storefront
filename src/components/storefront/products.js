/** 
 * Products
 * @component products
 */

import React from 'react';

// connect let's us opt-in to the store
import { connect } from 'react-redux';
import { Paper, List, ListItem, Button, Card, Typography } from '@material-ui/core';

// we need some actions that can be run against our reducer
import { changeCategory } from '../../store/categories.js';
import { filter, lowerInventory } from '../../store/products.js';
import { addItem } from '../../store/cart.js';

const If = (props) => {
  return props.condition ? props.children : null;
}

class Products extends React.Component {

  addToCart (product) {
    this.props.lowerInventory(product);
    this.props.addItem(product);
  }

  render() {
    // console.log('PROPS from products', this.props);
    let { categories, products } = this.props;

    return (
      <Paper elevation={2} elementType="div">
        <List>
          {products.map((product, idx) => {

            return (

            <If condition={product.category === categories.activeCategory.normalizedName && product.inventoryCount > 0}>
              <Card variant="outlined">
                <ListItem key={idx + '1'}>Product: {product.name}</ListItem>
                <ListItem key={idx + '2'}>Description: {product.description}</ListItem>
                <ListItem key={idx + '3'}>Price: {product.price}</ListItem>
                <Button varient="outlined" onClick={() => this.addToCart(product)}> Add To Cart </Button>

              </Card>
            </If>
            )

          })}

        </List>
      </Paper>
    )
  }
}

// tell our connect function add to component props whatever we need from the redux store / state 
// what does MY component need?
const mapStateToProps = state => {
  // console.log('state from mapStateToProps in products', state);
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart
  }
}

const mapDispatchToProps = { changeCategory, filter, lowerInventory, addItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
