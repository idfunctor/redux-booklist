import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  render(){
    return(
      <div>
        <ul className="list-group">
          {this._renderListItems()}
        </ul>
      </div>
    );
  }

  _renderListItems = ()=> {
    return this.props.books.map((book)=>{
      return(
        <li onClick={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  };
}

function mapStateToProps(state){
  return{
    books: state.books,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({'selectBook': selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
