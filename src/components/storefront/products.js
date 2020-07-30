/** 
 * Products
 * @component products
 */

import React, { useEffect } from 'react';

// connect let's us opt-in to the store
import { connect } from 'react-redux';
import { Paper, List, ListItem, Button, Card, Typography } from '@material-ui/core';

// we need some actions that can be run against our reducer
import { changeCategory } from '../../store/categories.js';
import { filter, lowerInventory, fetchProducts } from '../../store/products.js';
import { addItem } from '../../store/cart.js';

const If = (props) => {
  return props.condition ? props.children : null;
}

const Products = props => {

  useEffect(() => {
    props.fetchProducts();
  }, []);

  function addToCart(product) {
    props.lowerInventory(product);
    props.addItem(product);
  }
  console.log('props in products', props.products.products);
  
  let { categories, products } = props;

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
                <Button varient="outlined" onClick={() => addToCart(product)}> Add To Cart </Button>

              </Card>
            </If>
          )

        })}

      </List>
    </Paper>
  )

}

// tell our connect function add to component props whatever we need from the redux store / state 
// what does MY component need?
const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart
  }
}

const mapDispatchToProps = { changeCategory, filter, lowerInventory, addItem, fetchProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
