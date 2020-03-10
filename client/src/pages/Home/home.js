import React from "react";
import VideoHome from "./components/homeVideo";
import BodyHome from "./components/bodyHome";

class Home extends React.Component {
  render() {
    return (
      <>
        <VideoHome />
        <BodyHome />
      </>
    );
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default Home;
