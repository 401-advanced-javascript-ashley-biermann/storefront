import thunk from 'redux-thunk';
import { fetchCategories } from '../store/categories.js';
import { fetchProducts } from '../store/products.js';
import configMockStore from 'redux-mock-store';

const createStore = configMockStore([thunk]);

describe('Testing async actions', () => {
  it('should fetch products', () => {
    const store = createStore([]);

    return store.dispatch(fetchProducts())
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual('FETCH_PRODUCTS');
        expect(dispatchedActions[0].payload.length).toBeTruthy();
      });

    // weaker promise based testing, with none working api endpoint
    // let actions = store.dispatch(fetchCandidates())
    // expect(actions).resolves.toBe({});
  });
  it('should fetch categories', () => {
    const store = createStore([]);

    return store.dispatch(fetchCategories())
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual('FETCH_CATEGORIES');
        expect(dispatchedActions[0].payload.length).toBeTruthy();
      });
  });
});