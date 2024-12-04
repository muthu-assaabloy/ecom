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
    };
    this.animate = this.animate.bind(this);
    // this.canvasContainer = React.createRef(null);
  }
  componentDidMount() {
    const { match, location, history } = this.props;
    const { id } = this.props.match.params;
    console.log(match, location, history, id);
    console.log(this.context);
    this.initEngine();
  }
  initEngine() {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const { id } = this.props.match.params;
    console.log(id);
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );

    const defaultLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    defaultLight.position.set(0.5, 1, 0.25);
    this.scene.add(defaultLight);

    //

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setAnimationLoop(this.animate);
    this.renderer.xr.enabled = true;
    container.appendChild(this.renderer.domElement);

    // Don't add the XREstimatedLight to the scene initially.
    // It doesn't have any estimated lighting values until an AR session starts.

    const xrLight = new XREstimatedLight(this.renderer);

    xrLight.addEventListener("estimationstart", () => {
      // Swap the default light out for the estimated one one we start getting some estimated values.
      this.scene.add(xrLight);
      this.scene.remove(defaultLight);

      // The estimated lighting also provides an environment cubemap, which we can apply here.
      if (xrLight.environment) {
        this.scene.environment = xrLight.environment;
      }
    });

    xrLight.addEventListener("estimationend", () => {
      // Swap the lights back when we stop receiving estimated values.
      this.scene.add(defaultLight);
      this.scene.remove(xrLight);

      // Revert back to the default environment.
      this.scene.environment = this.defaultEnvironment;
    });

    //

    new RGBELoader()
      .setPath("/assets/textures/equirectangular/")
      .load("royal_esplanade_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        this.defaultEnvironment = texture;

        this.scene.environment = this.defaultEnvironment;
      });

    //

    // In order for lighting estimation to work, 'light-estimation' must be included as either an optional or required feature.
    document.getElementById("viewer3d").appendChild(
      ARButton.createButton(this.renderer, {
        optionalFeatures: ["light-estimation"],
      })
    );

    //

    const ballGeometry = new THREE.SphereGeometry(0.175, 32, 32);
    const ballGroup = new THREE.Group();
    ballGroup.position.z = -2;

    const rows = 3;
    const cols = 3;

    // for (let i = 0; i < rows; i++) {
    //   for (let j = 0; j < cols; j++) {
    //     const ballMaterial = new THREE.MeshStandardMaterial({
    //       color: 0xdddddd,
    //       roughness: i / rows,
    //       metalness: j / cols,
    //     });
    //     const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
    //     ballMesh.position.set(
    //       (i + 0.5 - rows * 0.5) * 0.4,
    //       (j + 0.5 - cols * 0.5) * 0.4,
    //       0
    //     );
    //     ballGroup.add(ballMesh);
    //   }
    // }

    // this.scene.add(ballGroup);
    const loader = new GLTFLoader().setPath("/assets/models/");
    loader.load("door.glb", (gltf) => {
      const model = gltf.scene;
      //   model.scale.set(0.01, 0.01, 0.01);
      // wait until the model can be added to the scene without blocking due to shader compilation

      this.renderer.compileAsync(model, this.camera, this.scene).then(() => {
        this.scene.add(model);
        //   _this.animate();
      });
    });
    //

    function onSelect() {
      //   ballGroup.position
      //     .set(0, 0, -2)
      //     .applyMatrix4(this.controller.matrixWorld);
      //   ballGroup.quaternion.setFromRotationMatrix(this.controller.matrixWorld);
    }

    this.controller = this.renderer.xr.getController(0);
    this.controller.addEventListener("select", onSelect);
    this.scene.add(this.controller);
  }
  loadModel() {
    let _this = this;
    new RGBELoader()
      .setPath("assets/textures/equirectangular/")
      .load("royal_esplanade_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        _this.scene.background = texture;
        _this.scene.environment = texture;

        // model
        _this.animate();
        const loader = new GLTFLoader().setPath("assets/models/");
        loader.load("DamagedHelmet.gltf", (gltf) => {
          const model = gltf.scene;

          // wait until the model can be added to the scene without blocking due to shader compilation

          _this.renderer
            .compileAsync(model, _this.camera, _this.scene)
            .then(() => {
              _this.scene.add(model);
              _this.animate();
            });
        });
      });
  }
  animate() {
    this.renderer.render(this.scene, this.camera);
  }
  render() {
    const { show3d } = this.state;
    return (
      <div className="bg-gray-200 h-full w-full" id="viewer3d">
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

        <div className="w-full h-5/6 pb-2 ">
          <div
            ref={this.canvasContainer}
            id={this.state.CanvasID}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
export default withRouter(IFrameViewer);
