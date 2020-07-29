import React from 'react';

import { connect } from 'react-redux';
import { Paper, List, ListItem, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../../store/cart.js';

const SimpleCart = props => {
  // console.log('props form SIMPLECART', props);
  let { cart } = props;
  return (
    <>
      <Paper elevation={1} elementType="section">

        <p>Simple Cart</p>
        <List>
          {cart.map((item, idx) => {
            return (
              <>
                <ListItem>{item.name}</ListItem>
                <Button variant="contained" onClick={() => props.deleteItem(item)} color="secondary" startIcon={<DeleteIcon />}
                  // className={classes.button}
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

const mapDispatchToProps = { deleteItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCart);
