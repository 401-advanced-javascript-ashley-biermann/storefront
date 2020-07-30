const initialState = [];

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM':
      return [...state, payload];

    case 'DELETE_ITEM':
      for (let i = 0; i < state.length; i++) {
        console.log('state', state);
        console.log('deleted item', payload.name);
        // FIXME: doesn't always seem to delete an item
        if (state[i].name === payload.name) {
          state.splice(i, 1);
        }
        return [...state];
      }
      return state;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// ACTIONS
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const deleteItem = (item) => {
  return {
    type: 'DELETE_ITEM',
    payload: item
  }
}
