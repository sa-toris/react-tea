import { combineReducers } from 'redux';

import filters from './filters';
import teas from './teas';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  teas,
  cart,
});

export default rootReducer;
