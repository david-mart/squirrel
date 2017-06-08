import { combineReducers } from 'redux';
import photos from './photo-reducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  photos,
  routing: routerReducer
});

export default rootReducer;
