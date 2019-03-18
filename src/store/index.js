import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers';
import initialState from './initialState';

export default createStore(reducer, initialState, devToolsEnhancer())
