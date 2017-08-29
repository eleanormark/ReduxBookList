// State argument is not application state, only the state
// this reducer is responsible for
// never mutate a state to return a new state version
// alway return a new object

export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
