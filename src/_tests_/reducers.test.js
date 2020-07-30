
import productsReducer from '../store/products.js';
import categoriesReducer from '../store/categories.js';

describe('Testing our reducers', () => {
  it('returns proper state for products', () => {
    const initialState = [];

    let testAction = {
      type: 'FETCH_PRODUCTS',
      payload: [{ name: 'Electronics', inventoryCount: 0 }]
    }

    let stateOutput = productsReducer(initialState, testAction);
    expect(stateOutput).toEqual(testAction.payload);
  });

  it('returns proper state for categories', () => {
    const initialState = [];

    let testAction = {
      type: 'FETCH_CATEGORIES',
      payload: ["Electronics"]
    }

    let stateOutput = categoriesReducer(initialState, testAction);
    expect(stateOutput).toEqual({"categories": ["Electronics"]});
  });

});
