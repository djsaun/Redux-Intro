// A reducer is a function that returns a piece of the application's state
// Can have multiple reducers

// Export function to make it available in any other file in application. When this file is imported, the reducer is automatically made available to the file. 
export default function() {
  return [
    { title: 'Javascript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ]
}