import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();

app.use(express.static('public'));


// we pass request object as an argument to static router defined in our renderer file.
app.get('*', (req, res) => {
  const store = createStore();
  // some logic to initialize store
  // then load data into store
  // then we pass the store inside rendere after data load and initialization
  res.send(renderer(req, store));
})

app.listen(3001, () => {
  console.log('Listening on port 3001!')
})
