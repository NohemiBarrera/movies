import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Redirect } from "react-router";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.onLogout();
  }

  render() {
    const name = this.props.name;
    console.log(name)
    return localStorage.getItem("token") ? (
      <div>
        <p>{name}</p>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
