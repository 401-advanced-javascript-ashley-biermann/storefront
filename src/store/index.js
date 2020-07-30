// Redux Magic!! Trust that it's doing what it says it's doing, based on the names of vars
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// REDUCERS, just a function, (which will be used to set initial state)
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';


let reducers = combineReducers({ categories, products, cart });

let store = () => {
  // tons of magic here, our logic hits some redux, this makes our store consumable by something
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();