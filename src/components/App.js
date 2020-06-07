import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

import Routes from './Router/Routes'

// context
import { useUserState } from "../context/UserContext";


// Redux
import { Provider } from 'react-redux';
import store from '../store/store';
import { loadUser } from '../actions/AuthActions';
import setAuthToken from '../utils/setAuthToken';

function App({ isAuthenticated }) {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  // global
  // var { isAuthenticated } = useUserState();

  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          {/* <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} /> */}
          <Route component={Routes} />
        </Switch>
      </HashRouter>
    </Provider>
  );

  // #######################################################################

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated ? (
  //           React.createElement(component, props)
  //         ) : (
  //             <Redirect
  //               to={{
  //                 pathname: "/login",
  //                 state: {
  //                   from: props.location,
  //                 },
  //               }}
  //             />
  //           )
  //       }
  //     />
  //   );
  // }

  // function PublicRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated ? (
  //           <Redirect
  //             to={{
  //               pathname: "/",
  //             }}
  //           />
  //         ) : (
  //             React.createElement(component, props)
  //           )
  //       }
  //     />
  //   );
  // }
}


// App.propTypes = {
//   isAuthenticated: PropTypes.bool
// };
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });
export default App;