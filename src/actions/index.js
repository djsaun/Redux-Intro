// An action creator is a function that returns an action (object)
// The object is then automatically sent to all the reducers inside of the application
// Reducers can choose to return a different piece of state depending on what the action is
// The newly returned piece of state then gets piped into the application state
// The application state gets sent back into the react application which causes all components to rerender

export function selectBook(book) {
  // selectBook is an action creator and needs to return an action (an object with a type property)
  // type is always uppercase 
  // payload is more information about the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
