import { combineReducers } from 'redux';

import header from './header';
import details from './details';
import cart from './cart';

export default combineReducers({
  header,
  details,
  cart,
});
