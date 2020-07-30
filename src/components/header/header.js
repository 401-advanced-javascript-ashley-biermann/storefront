/**
 * Header
 * @component Header
 */

import React from 'react';
import { Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: 'relative',
  },
  cart: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: '10px'
    // position: 'absolute',
    // right: '-100px'
  }

}));

// TODO: Update the header cart so it increments based on the number of items in the simple cart
const Header = props => {
  const classes = useStyles();

  return (
    <Paper elementType="div" id="header" elevation={2}>
      <AppBar position="static">
        <div className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Typography className="title" variant="h3" component="h1" gutterBottom>Trinkets & Bobbles</Typography>
          </Toolbar>
            <div className={classes.cart}>
              <Typography paragraph className>CART (0)</Typography>
              <ShoppingCartIcon />
            </div>
        </div>
      </AppBar>
    </Paper>
  )
}


export default Header;