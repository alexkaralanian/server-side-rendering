import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList'

// This new syntax / array of objects allows us to use react-router-config
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
    loadData
  }
]

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   )
// }
