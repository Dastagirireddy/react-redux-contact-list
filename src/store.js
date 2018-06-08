import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import ContactReducer from './reducers/ContactsReducer';

const middleware = applyMiddleware(createLogger());
const store = createStore(ContactReducer, middleware);

export default store;