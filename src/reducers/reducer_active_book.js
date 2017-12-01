// Reducers have two arguments -- current state and action; Reducers are only called when an action occurs
// State argument is not application state, only the state this reducer is responsible for
// Must always return a non-undefined value; Need a default case for initial load when no book is selected
export default function(state = null, action) {
  // Case in which we do care about the action
  switch(action.type) {
    case 'BOOK_SELECTED':
      // Always return a fresh object - do not make any changes to state here
      return action.payload;
  }

  // Pass state back if current action doesn't affect this reducer
  return state;
}