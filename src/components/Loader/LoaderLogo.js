import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      
      <>
        <img
							alt="loader"
							src={require("../../logodr.png")}
        ></img>
      </>
    );
  }
}

export default LogoLoader;
