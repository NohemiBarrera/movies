import React from "react";
import { Route, Redirect } from "react-router-dom";
import {LOGIN_URL} from "../../urls";

function PrivateRoute ({component: Component, ...rest}){  
  return(
  <Route
    {...rest}
    render={props => 
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_URL,
            state: {from: props.location}
          }}
        />
      )
    }
  />
)
  }

export default PrivateRoute;
