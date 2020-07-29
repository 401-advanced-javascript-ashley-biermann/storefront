/** Categories
 * @component Categories
 */

// A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import React from 'react';
import { connect } from 'react-redux';
import { Paper, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeCategory } from '../../store/categories.js';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    paddingLeft: '24px'
  },

  list: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px'

  },

  listItem: {
    display: 'inline',
    // flexDirection: 'row'
  },

  mainCategory: {
    display: 'flex',
  }
}));

const Categories = props => {

  let categoriesArr = props.categories.categories;
  // console.log('looking for changeCategory', this.props.changeCategory);
  const classes = useStyles();
  return (
    <Paper elevation={0} elementType="div">
      <Paper elementType="section">
        <Typography className={classes.title} variant="h4">Browse Our Categories</Typography>
        <div className={classes.list}>
          <List>
            {categoriesArr.map((category, idx) => {
              return (
                <ListItem className={classes.listItem} key={idx} onClick={() => props.changeCategory(category)}>{category.displayName}</ListItem>
              )
            })}
          </List>
        </div>
      </Paper>
      <div className={classes.mainCategory}>
        {/* <Paper elementType="main"> */}
        <Typography variant="h5">{props.categories.activeCategory.name}</Typography>
        <Typography variant="p" >
          {props.categories.activeCategory.description}
          </Typography>
        <Typography>

        </Typography>

        {/* </Paper> */}
      </div>
    </Paper>
  )
}


const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = { changeCategory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
