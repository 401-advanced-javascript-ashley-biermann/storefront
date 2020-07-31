/**
 * Header
 * @component Header
 */

import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Paper, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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

  // menu stuff
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // --- menu stuff up there ---

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
          <div>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <BrowserRouter>

                <MenuItem>
                  <Link activeClassName='selected' to="/">Home</Link>

                  <Link activeClassName='selected' to="/cart">Checkout</Link>
                </MenuItem>

              </BrowserRouter>


            </Menu>

          </div>
        </div>
      </AppBar>
    </Paper>
  )
}


export default Header;