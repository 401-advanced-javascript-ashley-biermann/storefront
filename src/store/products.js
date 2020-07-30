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
    case 'FETCH_PRODUCTS':
      return payload;
    case 'INCREMENT_INVENTORY':
      //TODO: get this functioning

      // from class
      // case 'INCREMENT_VOTES':
      //   return state.map(candidate => candidate.id === payload.id ? payload : candidate);


      console.log('In the increment inventory');
      return state;
    case 'LOWER_INVENTORY':
      console.log('In the lower inventory case');
      // TODO: Get this functioning
      return state;
    default:
      return state;
  }
}

// ACTIONS

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
}

export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName,
  }
}

export const incrementInventory = (id) => {
  return {
    type: 'INCREMENT_INVENTORY',
    payload: id,
  }
}

export const lowerInventory = (product) => {
  return {
    type: 'LOWER_INVENTORY',
    payload: product,
  }
}
