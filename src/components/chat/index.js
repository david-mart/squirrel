import React, { Component } from "react";
import Login from "./login";
import Messages from "./messages";

import { connect } from "react-redux";
class Chat extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div>
        {userName === "" ? <Login /> : <Messages />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { chat } = state;
  return { ...chat };
};

export default connect(mapStateToProps, {})(Chat);
