import React, { Component } from 'react';
// Use the react-redux package to connect redux to react
import { connect } from 'react-redux';

// A container is a react component that has a direct connection to the state managed by redux
// Most parent component that cares about a particular piece of state should be a container
// Only the most parent component that uses a particular piece of state needs to be connected to redux
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Function will take application state as an argument
// If state ever changes, this container will instantly rerender with the new data
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  // state.books is defined in ../reducers/index.js
  return {
    books: state.books // books will be accessible as this.props.books
  };
}

// connect takes a function and a component and produces a container
// whenever the application state changes, the object in the state function will be assigned as props to the component
export default connect(mapStateToProps)(BookList);