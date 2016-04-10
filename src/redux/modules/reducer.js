import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import counter from './counter';
import dices from './dices';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  counter,
  dices
});
