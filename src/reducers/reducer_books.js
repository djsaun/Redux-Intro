// A reducer is a function that returns a piece of the application's state
// Can have multiple reducers

// Export function to make it available in any other file in application. When this file is imported, the reducer is automatically made available to the file. 
export default function() {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
}