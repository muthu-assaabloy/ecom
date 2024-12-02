/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import Viewer from "../3d/Viewer";

class LandingPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="bg-gray-200  h-screen w-screen">
        <Viewer />
      </div>
    );
  }
}
export default LandingPage;
