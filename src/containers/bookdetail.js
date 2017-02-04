import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if (!this.props.currentBook){
      return (
        <div className="detail-container">
          <h1>Please select a book!</h1>
        </div>
      );
    }
    return(
      <div className="detail-container">
        <h1>Book Details:</h1>
        <h2>{this.props.currentBook.title}</h2>
        <span>Pages: {this.props.currentBook.pages}</span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    currentBook: state.currentBook
  };
}

export default connect(mapStateToProps)(BookDetail);
