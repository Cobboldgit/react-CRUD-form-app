import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function ProtectedRoute({ component: Component, auth, ...rest }) {
  if (!auth.isLoaded) return null;

  if (!auth.isEmpty) {
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />;
  }

  return (
      <Route {...rest} render={(props) => {
          return <Redirect to={{pathname: "/login"}}/>
      }}/>
  )
}

const mapState = (state) => {
    return {
        auth: state.firebaseReducers.auth
    }
}

export default connect(mapState)(ProtectedRoute);
