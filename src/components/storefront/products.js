/** 
 * Products
 * @component products
 */

import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

class Products extends React.Component {
  render() {
    return (
        <Paper elevation={2} elementType="div">
          <Paper elementType="section">Section 1</Paper>
          <Paper elementType="section">Section 2</Paper>
          <Paper elementType="section">Section 3</Paper>
        </Paper>
    )
  }
}

export default Products;