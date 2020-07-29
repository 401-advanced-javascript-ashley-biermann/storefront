// Products

const initialState =
  [
    {
      category: 'Groceries',
      name: 'Brussel Sprouts',
      description: 'A nice little product description goes here',
      price: '$$',
      inventoryCount: 5
    },
    {
      category: 'Electronics',
      name: 'Computer',
      description: 'A nice little product description goes here',
      price: '$$$',
      inventoryCount: 10
    },
    {
      category: 'Apparel',
      name: 'Sunscreen',
      description: 'A nice little product description goes here',
      price: '$',
      inventoryCount: 3
    }
  ]

// REDUCERS

// Create a reducer that will filter the products list based on the active category

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

      return state;
    // case 'RESET':
    //   return initialState;
    default:
      return state;
  }
}

// ACTIONS

// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions

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