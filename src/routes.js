import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Board,
  NotFound,
} from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Board}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
