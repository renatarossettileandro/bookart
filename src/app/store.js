import { createStore } from 'redux';
import { rootReducer } from './Redux/rootreducer';


export const store = createStore(rootReducer);
