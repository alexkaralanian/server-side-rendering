import express from 'express';
import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));


// we pass request object as an argument to static router defined in our renderer file.
app.get('*', (req, res) => {
  res.send(renderer(req))
})

app.listen(3001, () => {
  console.log('Listening on port 3001!')
})
