import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Змініть на іменований експорт
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



