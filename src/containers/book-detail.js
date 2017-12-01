import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Redux runs through some default actions on page load. Since state (in reducer_active_book.js) is defaulted to null, our component is going to try to render null properties which will throw an error
    // Can mitigate this by returning early if the state is null
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);