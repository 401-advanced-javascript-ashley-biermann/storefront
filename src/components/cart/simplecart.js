import React from 'react';

import { connect } from 'react-redux';
import { Paper, List, ListItem, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../../store/cart.js';
import { incrementInventory } from '../../store/products.js';

const SimpleCart = props => {
  let { cart } = props;

  function removeFromCart(item) {
    props.deleteItem(item);
    props.incrementInventory(item);
  }

  return (
    <>
      <Paper elevation={1} elementType="section">

        <p>Simple Cart</p>
        <List>
          {cart.map((item, idx) => {
            return (
              <>
                <ListItem>{item.name}</ListItem>
                <Button variant="contained" onClick={() => removeFromCart(item)} color="secondary" startIcon={<DeleteIcon />}
                >
                  Remove</Button>
              </>
            )
          })}
        </List>

      </Paper>
    </>
  )
}


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = { deleteItem, incrementInventory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCart);
