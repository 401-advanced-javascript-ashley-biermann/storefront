/** 
 * Categories store
 * @component store
 */
// STORE
const initialState = {
  categories: [
    {
      normalizedName: 'normalized-name',
      displayName: 'Display Name',
      description: 'A nice little description of category goes here'
    }
  ],
  activeCategory: '',
}

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATEACTIVE':
      return { activeCategory: payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ACTIONS
export const updateActive = (categoryName) => {
  return {
    type: 'UPDATEACTIVE',
    payload: categoryName
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}