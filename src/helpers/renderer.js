import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'

// context here is used to handle redirects and error handling.
// static router is used specifically for SSR on server since node doesnt have a url bar / browser.
// Static router needs to be told exactly what path it needs to consider. We need to communicate path user is trying to access to the statc router so it knows what to render.
// This path is contained in the original request okect that exress passed to our route handler
// We receive the request object and use req.path to identify the route requested.
// context is just an empty object

export default req => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
