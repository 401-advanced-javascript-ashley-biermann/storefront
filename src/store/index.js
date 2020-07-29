// Redux Magic!! Trust that it's doing what it says it's doing, based on the names of vars
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS, just a function, (which will be used to set initial state)
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';

// create reducer logic to feed to our store. Now we have a props.categories and a props.products
let reducers = combineReducers({ categories, products, cart });

let store = () => {
  // tons of magic here, our logic hits some redux, this makes our store consumable by something
  return createStore(reducers, composeWithDevTools());
}

export default store();