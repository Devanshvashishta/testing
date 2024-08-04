import React, { Component } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      console.log("component did update was called");
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
