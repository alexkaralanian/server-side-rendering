import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // some logic to initialize store
  // then load data into store
  // then we pass the store inside rendere after data load and initialization

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // matchRoutes returns an array of component thats about to be rendered in the app.
  // For each component we will define a function that loads data into each respective component since we cannot use lifecycle methods on the server
  // all this is so we dont have to render our app in order to fire off data loading functions

// when we call load data, we pass in the redux store
// dispatch an action creator and pass action to redux store manually
// return a promise that represent then network request
// wait for promise to resolve.
// render app to string.

  Promise.all(promises).then(() => {
  // we pass request object and store as arguments to static router defined in our renderer file.
    res.send(renderer(req, store));
  })
  // array of promises passed to Promise.all
  // returns one promise which resolves when all others are done

})

app.listen(3001, () => {
  console.log('Listening on port 3001!')
})
