import React from 'react';
import { connect } from 'react-redux';
import { Card, List, ListItem, Paper, Typography } from '@material-ui/core';

const ProductDetails = props => {

  let { products } = props;

  console.log('products form details page', products);

  return (
    <div>

      <Paper elevation={2} elementType="div">

        <Card variant="outlined">

          <Typography variant="h4">Product Name</Typography>
          <Typography variant="p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>

          <List>

            <ListItem>Link to Reviews</ListItem>
            <ListItem>Suggestions</ListItem>
            <ListItem>Recommend to a Friend</ListItem>

          </List>


        </Card>

      </Paper>

    </div>
  )

}


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);