/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import * as THREE from "three";
// import  THREE from 'three/src/loaders/';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { ContextApi } from "../../provider/Provider";
import { ARButton } from "three/addons/webxr/ARButton.js";
import { XREstimatedLight } from "three/addons/webxr/XREstimatedLight.js";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Viewer from "./Viewer";
class IFrameViewer extends PureComponent {
  static contextType = ContextApi;
  constructor(props) {
    super(props);
    this.state = {
      CanvasID: "webglCanvas",
      show3d: true,
      modelUrl: "lock5.glb",
    };
    // this.animate = this.animate.bind(this);
    // this.canvasContainer = React.createRef(null);
  }
  componentDidMount() {
    var myParam = window.location.search.split("model=")[1];
    var url = new URL(window.location);
    var model = url.searchParams.get("model");
    console.log(model);
    this.setState({ modelUrl: model });
  }

  render() {
    const { show3d, modelUrl } = this.state;
    return (
      <div className="bg-gray-200 h-[100dvh] w-full" id="viewer3d">
        {/* <div id="info">
          <a href="https://threejs.org" target="_blank" rel="noopener">
            three.js
          </a>{" "}
          ar - Lighting Estimation
          <br />
          (Chrome Android 90+)
        </div> */}
        {/* {show3d && (
          <div >
            {this.props.match && this.props.match.params.id && (
              <div className="h-full w-full">
                <Viewer model={this.props.match.params.id} />
              </div>
            )}
          </div>
        )} */}

        <div className="w-full h-full pb-2 bg-sky-100">
          <Viewer model={modelUrl} animation={false} />
        </div>
      </div>
    );
  }
}
export default withRouter(IFrameViewer);
