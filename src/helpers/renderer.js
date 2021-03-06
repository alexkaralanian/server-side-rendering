import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'
import Routes from '../client/Routes';

// context here is used to handle redirects and error handling.
// context is just an empty object

// static router is used specifically for SSR on server since node doesnt have a url bar / browser.
// We need to communicate path user is trying to access to the statc router so it knows what to render.
// This path is contained in the original request object that express passed to our route handler
// We receive the request object and use req.path to identify the route requested.

// We create the store inside of index.js file
// We execute logic and then pass it into the provider once the data load is complete

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // serialize prevents XSS attaches.
  // We could call JSON.stringify but that would execute any script tags embedded into the code.

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
