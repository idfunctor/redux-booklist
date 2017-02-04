import { combineReducers } from 'redux';
import BookReducer from './reducer_books.js'
import CurrentBook from './reducer_currentbook.js'
const rootReducer = combineReducers({
  books: BookReducer,
  currentBook: CurrentBook
});

export default rootReducer;
