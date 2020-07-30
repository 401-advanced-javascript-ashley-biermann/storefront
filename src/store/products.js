/** 
 * Products store
 * @component store
 */

import axios from 'axios';

// STORE
const initialState = [];

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER': // 'CHANGE'
      let filteredProducts = []; 
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          filteredProducts.push(state.products[i]); 
        }
        return { ...state, products: filteredProducts } 
      }
    case 'LOWER_INVENTORY':
      console.log('In the lower inventory case')
      // TODO: Get this functioning
      return state;
    case 'FETCH_PRODUCTS':
      return payload;
    default:
      return state;
  }
}

// ACTIONS

export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName
  }
}

export const lowerInventory = (product) => {
  return {
    type: 'LOWER_INVENTORY',
    payload: product
  }
}

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/products');
  dispatch({
    type: 'FETCH_PRODUCTS', 
    payload: response.data,
  });
}