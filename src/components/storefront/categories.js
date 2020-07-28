/** Categories
 * @component Categories
 */

import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

class Categories extends React.Component {
  render() {
    return (
      <Paper elevation={2} elementType="div">
        <Paper elementType="section">section a</Paper>
        <Paper elementType="main"> MAIN
        </Paper>
      </Paper>
    )
  }
}

export default Categories;