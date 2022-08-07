import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../pages/Loading';

const ProtectedRoute = ({ children }) => <div>aaa</div>;

export default ProtectedRoute;

// const ProtectedRoute = ({ children }) =>
//   withAuthenticationRequired(children, {
//     onRedirecting: () => <Loading />
//   });

// export default ProtectedRoute;

// Typescript version (to fix)

// import React from 'react';
// import { Route } from 'react-router-dom';
// import {
//   withAuthenticationRequired,
//   WithAuthenticationRequiredOptions
// } from '@auth0/auth0-react';
// import Loading from '../pages/Loading';

// interface IProtectedRoute<P extends object> {
//   Component: React.ComponentType<P>;
//   options: WithAuthenticationRequiredOptions;
// }

// const ProtectedRoute = <P extends object>({
//   Component,
//   ...args
// }: IProtectedRoute<P>) => {
//   const ComponentWithAuthRequiered = withAuthenticationRequired(Component, {
//     onRedirecting: () => <Loading />
//   });
// // !!! issue with type compatibility here !!!
//   <Route element={ComponentWithAuthRequiered} {...args} />;
// };

// export default ProtectedRoute;
