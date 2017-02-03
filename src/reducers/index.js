import { combineReducers } from 'redux';
import BookReducer from './reducer_books.js'
const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
