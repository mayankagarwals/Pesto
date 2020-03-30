import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";

class myProf extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div className="container valign-wrapper">
    <Route exact path="/MyProf" component={Navbar} />
  </div>
);
  }
}

myProf.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(myProf);