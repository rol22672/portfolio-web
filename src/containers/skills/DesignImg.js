import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
							alt="saad sitting on table"
							src={require("../../assests/images/developerActivity.svg")}
						></img>
    );
  }
}
