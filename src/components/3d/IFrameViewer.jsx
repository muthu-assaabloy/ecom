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
import { Triangle } from "react-loader-spinner";
import { width } from "@mui/system";
class IFrameViewer extends PureComponent {
  static contextType = ContextApi;
  constructor(props) {
    super(props);
    this.state = {
      CanvasID: "webglCanvas",
      isLoading: true,
      modelUrl: "",
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
    const { isLoading, modelUrl } = this.state;
    return (
      <div className="bg-gray-200 h-[100dvh] w-full" id="viewer3d">
        {modelUrl && modelUrl !== "" ? (
          <>
            {" "}
            <div className="w-full h-full pb-2 bg-sky-100">
              <Viewer model={modelUrl} animation={false} />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full pb-2 bg-gray-100">
              <div className="bg-gray-100 grid grid-cols-1 gap-2">
                <div className=" bg-blue-600   flex  px-4 flex-row text-2xl font-bold text-white gap-1 py-2 divide-x divide-gray-300 ">
                  <p className="w-[300px] ">IFrame</p>
                  <p className=" border-white text-center pl-8">Code</p>
                </div>
                {[
                  "door1.glb",
                  "door2.glb",
                  "lock1.glb",
                  "lock4.glb",
                  "lock6.glb",
                ].map((item) => (
                  <>
                    {" "}
                    <div className="bg-gray-100 shadow-2xl border-red-200 rounded-xl flex px-4 flex-row ">
                      <iframe
                        src={`https://muthu-assaabloy.github.io/ecom/?model=${item}`}
                        height="200px"
                        title="3D Viewer"
                      ></iframe>
                      <p className="flex  content-center text-center items-center bg-black text-white">{`<iframe  src="https://muthu-assaabloy.github.io/ecom/?model=${item}"
                  title="3D Viewer"
                  width="500px"
                  height="500px"></iframe>`}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(IFrameViewer);
