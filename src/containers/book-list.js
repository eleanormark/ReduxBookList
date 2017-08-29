import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action-creator selectBook
import { selectBook } from '../actions/index';

// The bindActionCreators function makes sure the action
// that is gernerated by the action-creator actually flows through
// all the different reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
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
    );
  }
}

function mapStateToProps(state) {
  // Whenever the state changes this container BookList will be re-rendered with the new state
  // Whatever is returned will show up as props inside of booklist container
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
