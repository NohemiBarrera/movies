import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";
import { Redirect } from "react-router";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

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
          <Grid container>
            <Grid item xs={12}>
              <FacebookLoginBtn
                appId="412227666450687"
                autoLoad={false}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
              />
            </Grid>
          </Grid>
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
