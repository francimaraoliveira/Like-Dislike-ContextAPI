// src/store.ts

import { createStore } from 'redux';
import votesReducer from './reducers/votesReducer';

const store = createStore(votesReducer);

export default store;