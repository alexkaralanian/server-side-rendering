import React from 'react';
import HomeContainer from './containers/HomeContainer';
import UsersListContainer, { loadData } from './containers/UsersListContainer'

// This new syntax / array of objects allows us to use react-router-config and access the loadData function on server.
export default [
  {
    ...HomeContainer,
    path: '/',
    exact: true
  },
  {
    ...UsersListContainer,
    path: '/users',

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
