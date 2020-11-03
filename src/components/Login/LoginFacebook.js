import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import "../../App.css";

class LoginFacebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: "",
  };
  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  componentClicked = () => {
    console.log("Facebook btn click");
  };

  responseFacebook = (res) => {
    this.props.onLogin(res);
  };

  render(location) {
    let facebookData;
    this.props.isAuthenticated
      ? (facebookData = (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ))
      : (facebookData = (
          <Box
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            display="flex"
            textAlign="center"
            spacing={3}
            justify="center"
            className="container-login moon-background"
          >
            <h1>Movies</h1>

            <FacebookLogin
              appId="412227666450687"
              autoLoad={false}
              fields="name, email, picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
              size="medium"
              cookie={true}
              textButton="Iniciar sesión con Facebook"
            />
          </Box>
        ));

    return <>{facebookData}</>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (res) => {
      dispatch(login(res));
    },
  };
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);
