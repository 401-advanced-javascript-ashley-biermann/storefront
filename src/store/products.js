// Products
// State should be a list of all products
// Each product should have a category association, name, description, price, inventory count
// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions

const initialState = {
  products: [
    {
      category: 'associated-category',
      name: 'Product Name',
      description: 'A nice little product description goes here',
      price: '$$$',
      inventoryCount: 10
    }
  ]
}

// REDUCERS

// Create a reducer that will filter the products list based on the active category

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER': // 'UPDATEACTIVE'
      let filteredProducts = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].category === payload) {
          filteredProducts.push(products[i]);
        }
        return { products: filteredProducts }
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ACTIONS
// could this just be the UPDATEACTIVE from categories?
export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName
  }
}