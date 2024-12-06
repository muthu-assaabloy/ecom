/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import * as THREE from "three";
// import  THREE from 'three/src/loaders/';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { ContextApi } from "../../provider/Provider";
import { createLable } from "./MeshUtils";
import QRCode from "react-qr-code";
import { Water } from "three/addons/objects/Water.js";
import { Sky } from "three/addons/objects/Sky.js";
import { Triangle } from "react-loader-spinner";

class Viewer extends PureComponent {
  static contextType = ContextApi;
  constructor(props) {
    super(props);
    this.state = {
      CanvasID: "webglCanvas",
      hoveredInfo: null,
      top: "",
      left: "",
      showQR: false,
      isLoading: true,
    };
    this.animate = this.animate.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.canvasContainer = React.createRef(null);
    this.clock = new THREE.Clock();
  }
  componentDidMount() {
    console.log(this.context);
    this.initEngine();
  }
  initEngine() {
    if (this.renderer) return;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    let width = this.canvasContainer.current.clientWidth;
    let height = this.canvasContainer.current.clientHeight;
    this.renderer.setSize(width, height);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.canvasContainer.current.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 0);
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 5000);
    this.camera.position.set(-1.8, 0.6, 50);

    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.renderer.domElement.addEventListener("mousemove", this.mouseMove);
    this.light = new THREE.AmbientLight(0x858585, 1);
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight(0xffffff);
    this.light.position.set(0, 0, 100);
    this.light.intensity = 1;
    this.scene.add(this.camera);
    this.camera.add(this.light);

    if (this.props.autoRotate) this.controls.autoRotate = true;
    // this.controls.addEventListener("change", this.animate); // use if there is no animation loop
    this.controls.minDistance = 0.01;
    this.controls.maxDistance = 200;
    this.controls.target.set(0, 0, -0.2);
    this.controls.update();
    if (this.props.waterAnimation) {
      this.camera.position.set(-1.8, 50, 50);
      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

      this.water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 520,
        waterNormals: new THREE.TextureLoader().load(
          "assets/textures/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x00000,
        distortionScale: 3.7,
        fog: this.scene.fog !== undefined,
      });

      this.water.rotation.x = -Math.PI / 2;
      // this.water.rotation.x = -Math.PI / 2;
      this.scene.add(this.water);

      const sky = new Sky();
      sky.scale.setScalar(10000);
      this.scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.8;
    }

    this.animate();
    this.loadModel();
  }
  LoadFile(url) {}
  loadModel(url) {
    this.setState({ isLoading: true });
    let _this = this;
    new RGBELoader()
      .setPath("assets/textures/equirectangular/")
      .load("blouberg_sunrise_2_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        // _this.scene.background = texture;
        _this.scene.environment = texture;
        if (this.model) {
          this.scene.remove(this.model);
        }
        // model
        const loader = new GLTFLoader().setPath(url ? "" : "assets/models/");
        loader.load(
          this.props.model ? this.props.model : url ? url : "door2.glb",
          (gltf) => {
            this.model = gltf.scene;
            console.log(gltf, "model");

            // wait until the model can be added to the scene without blocking due to shader compilation
            this.scene.add(this.model);
            // this.UpdateWidthHeight(7, 6);
            let addedInfo = [];
            if (!this.props.autoRotate) {
              this.model.traverse((element) => {
                if (
                  !addedInfo.includes("lock") &&
                  element.name.toLocaleLowerCase().includes("lock")
                ) {
                  if (element) {
                    let label = createLable(
                      new THREE.Vector3(0, 0, 0),
                      "i",
                      "white",
                      0.5
                    );
                    label.material.depthTest = false;
                    label.material.depthWrite = false;
                    label.info = "Lable info is";
                    label.IsSprite = true;
                    label.infoType = "lock";
                    const geometry = element.geometry;
                    const positionAttribute = geometry.getAttribute("position");
                    const vertex = new THREE.Vector3();
                    vertex.fromBufferAttribute(positionAttribute, 0);
                    let wpos = vertex.clone();
                    // let wpos = element.getWorldPosition(new THREE.Vector3());
                    console.log("wpos", wpos);
                    label.position.set(wpos.x + 0.5, wpos.y + 0.2, wpos.z);

                    this.model.add(label);
                    addedInfo.push("lock");
                  }
                }
              });
            }
            this.mixer = new THREE.AnimationMixer(this.model);
            gltf.animations.forEach((clip) => {
              // Play each animation
              const action = this.mixer.clipAction(clip);
              action.play();
            });
            // this.mixer.clipAction(gltf.animations[0]).play();
            if (this.props.waterAnimation) {
              this.model.position.set(
                this.model.position.x,
                this.model.position.y,
                this.model.position.z + 15
              );
            }
            this.setState({ isLoading: false });
            // this.UpdateDoorColor(0xff0000);

            // this.renderer
            //   .compileAsync(this.model, this.camera, this.scene)
            //   .then(() => {

            //   });
          }
        );
      });
  }
  UpdateWidthHeight(width, height) {
    this.model.scale.set(width / 5, height / 4, 1);
  }
  UpdateFrameColor(color) {
    console.log("update coloert", color);
    this.scene.traverse((element) => {
      if (element.name.toLocaleLowerCase().includes("frame")) {
        if (element instanceof THREE.Mesh && element.material) {
          element.material.color.set(new THREE.Color(color));
          element.material.needsUpdate = true;
        }
      }
    });
  }
  UpdateDoorColor(color) {
    this.scene.traverse((element) => {
      if (element.name.toLocaleLowerCase().includes("door")) {
        if (element instanceof THREE.Mesh && element.material) {
          element.material.color.set(new THREE.Color(color));
          element.material.needsUpdate = true;
        }
      }
    });
  }
  animate() {
    requestAnimationFrame(this.animate);
    this.controls.update();
    const delta = this.clock.getDelta();
    if (this.water) {
      const time = performance.now() * 0.001;

      this.water.material.uniforms["time"].value += 1.0 / 60.0;
    }
    if (this.mixer) {
      this.mixer.update(delta);
    }
    this.renderer.render(this.scene, this.camera);
  }
  mouseMove(event) {
    if (!this.renderer) return;
    if (this.props.autoRotate) return;
    let mouse = new THREE.Vector2();

    const rect = this.renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    let intersectObj = raycaster.intersectObjects(this.scene.children, true);
    intersectObj = intersectObj.filter((item) => item.object.IsSprite);
    if (intersectObj.length > 0) {
      console.log(intersectObj);
      this.renderer.domElement.style.cursor = "pointer";
      this.setState({
        left: event.clientX + 15,
        top: event.clientY - 6,
        hoveredInfo: intersectObj[0].object.infoType,
      });
    } else {
      this.setState({ hoveredInfo: null });
      this.renderer.domElement.style.cursor = "auto";
    }
  }
  componentWillUnmount() {
    // this.renderer.domElement.removeEventListener(
    //   "mousemove",
    //   this.mouseMove,
    //   false
    // );
  }
  InfoMessage() {
    const { hoveredInfo } = this.state;
    switch (hoveredInfo) {
      case "lock": {
        return (
          <div>
            <p>
              {this.lockInfo
                ? this.lockInfo
                : "198 Vertical Bolt RIM Door Lock Both side keys, Regular Key, Satin Nickel"}
            </p>
          </div>
        );
      }
      default: {
        return <div></div>;
      }
    }
  }
  taggleQR() {
    const { showQR } = this.state;
    this.setState({ showQR: !showQR });
  }
  render() {
    const { hoveredInfo, top, left, showQR, isLoading } = this.state;
    return (
      <div className="bg-gray-200 h-full w-full">
        <div className="w-full h-full pb-2 ">
          {isLoading && (
            <div
              className="h-full w-full flex flex-col"
              style={{
                position: "fixed",
                top: 0,
                left: 0,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional for a dimmed background
                zIndex: 9999,
              }}
            >
              <Triangle
                visible={true}
                height="inherit"
                width="inherit"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                // wrapperStyle={{ height: "100vh", width: "100vw" }}
                wrapperClass=""
              />
              <p className="text-3xl font-bold pt-4">Loading...</p>
            </div>
          )}
          <div
            className="bg-gray-200"
            ref={this.canvasContainer}
            id={this.state.CanvasID}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        {hoveredInfo && (
          <div
            className="w-48 bg-sky-300 z-50 text-black p-2 rounded-lg  shadow-2xl font-semibold"
            style={{ top: top, left: left, position: "absolute" }}
          >
            {this.InfoMessage()}
          </div>
        )}
        {showQR && (
          <div
            className="cursor-pointer w-[250px] bg-sky-200 p-4 rounded-xl shadow-lg shadow-sky-700  mt-2 flex flex-row-reverse -top-[400px] relative  text-end items-end"
            onClick={() => {}}
            style={{ left: " calc(100% - 260px)" }}
          >
            <div className="flex flex-col">
              {/* <img
                className="w-[100px] h-[100px] object-contain"
                src="/assets/qrcode.png"
                alt=""
              /> */}
              <div
                className="bg-white"
                style={{
                  height: "200px",
                  margin: "0 auto",
                  maxWidth: 200,
                  width: "200px",
                  // padding: "5px",
                }}
              >
                <QRCode
                  size={512}
                  style={{ height: "200px", maxWidth: "100%", width: "200px" }}
                  value={"https://192.168.137.1:3000/ar/" + this.props.model}
                  viewBox={`0 0 512 512`}
                />
              </div>
              <p className="font-bold text-center pt-2">Open with QR Code:</p>
              <p className="text-left pl-2">
                Scan this code to open on your device, then tap on the AR icon
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Viewer;
