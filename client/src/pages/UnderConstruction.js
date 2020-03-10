import React from "react";
import "./underconstruction.css";

class UnderConstruction extends React.Component {
  render() {
    return (
      <>
        <div className="fix-space"></div>
        <div className="container-cs">
          <div className="wrapper-cs"></div>
          <h1 className="comingsoon">coming soon</h1>
        </div>
      </>
    );
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default UnderConstruction;
