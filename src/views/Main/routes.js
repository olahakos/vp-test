import React from 'react';
import {Route, Redirect} from 'react-router';

import Container from './Container';
import Film from './Film/Film';

export const makeMainRoutes = () => {
  return (
    <Route path='' component={Container} >
      <Route path='/pc-se/film/:id' component={Film} />
      <Redirect from="*" to="/pc-se/film/titanic-1997" />
    </Route>
  );
};

export default makeMainRoutes;
