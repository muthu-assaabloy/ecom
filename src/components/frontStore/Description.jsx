import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImageMagnifier from "./magnifier";
import {
  CardActionArea,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { SketchPicker } from "react-color";
import { useHistory } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import prodData from "../data/ProdData";
import "./magnifier.css";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import QuantityInput from "./quantity";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { AllProducts } from "../../Common/DoorConstants";
import Viewer from "../3d/Viewer";

const Description = () => {
  const { id } = useParams();
  const [img, setImg] = useState();
  const [view360, setView360] = useState(false);
  const [view3D, setView3D] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prod, setProd] = useState({});
  const [showQR, setShowQR] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [getDisable, setDisable] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [color, setColor] = useState("#fff");
  const history = useHistory();
  const viewerRef = useRef(null);
  const handleColorChange = (color) => {
    console.log(color);
    setColor(color);
  };

  const hoverHandler = (image) => {
    setImg(image);
  };
  console.log(AllProducts, id);
  // const prodId = parseInt(id, 10);
  useEffect(() => {
    console.log(AllProducts, id);
    if (id) {
      const prod = AllProducts.find((prod) => prod.id === id);
      //   console.log(prod.id);
      console.log(prod);
      setProd(prod);
      if (prod?.images && prod.images.length > 0) {
        setImg(prod.images[0]);
      }
    }
  }, [id]);

  const productsPage = () => {
    history.push("/products");
  };

  const Steelgauge = ["20", "18", "16", "14"];
  const Steeltype = ["CK", "RK", "SS"];

  return (
    <div>
      {" "}
      <div className="flex justify-between">
        <div className="flex mx-11 mt-32">
          <div className="my-4 cursor-pointer">
            <ArrowBackIosIcon onClick={productsPage} />
          </div>
          <div
            className="text-xl font-bold mx-6 my-4 "
            style={{
              color: "rgb(85, 86, 91)",
              fontFamily: "Poppins",
              letterSpacing: "1px",
              fontWeight: 500,
            }}
          >
            DESCRIPTION
          </div>
        </div>
        {/* <FormControl sx={{ mx: 6, minWidth: 200, mt: 2 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select id="userSelect" value="" label="" onChange="">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"User 1"}>Door</MenuItem>
            <MenuItem value={"User 2"}>Locks</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <hr className="mx-11 mt-2 " />
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "left",
          marginTop: "20px",
        }}
        style={{
          height: "80vh",
          width: "100vw",
          scrollBehavior: "auto",
          overflow: "auto",
        }}
      >
        <div className="flex-row justify-between pl-11 mt-10">
          <div
            className="text-xl font-extrabold "
            style={{
              color: "rgb(85, 86, 91)",
              fontFamily: "Poppins",
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            {prod?.name}
          </div>
          <div className="container pt-10 gap-14 ">
            <div className="left gap-20 ">
              <div className="left_1 pt-2">
                {prod &&
                  prod.images &&
                  prod?.images.map((image, i) => (
                    <div
                      className="img_wrap"
                      key={i}
                      onMouseOver={() => hoverHandler(image)}
                      onClick={() => {
                        setView360(false);
                        setView3D(false);
                      }}
                    >
                      <img src={image} alt="" />
                    </div>
                  ))}
                <div
                  className="img_wrap"
                  key="3d"
                  onClick={() => {
                    setView3D(true);
                    setView360(false);
                  }}
                >
                  <img src="/assets/3d-model.png" alt="" />
                </div>
                <div
                  className="img_wrap"
                  key="3d"
                  onClick={() => {
                    setView360(true);
                    setView3D(false);
                  }}
                >
                  <img src="/assets/360-degrees.png" alt="" />
                </div>
              </div>
              <div className="left_2 border h-full" style={{ width: "150vh" }}>
                {view3D && (
                  <div className="w-full h-full ">
                    <Viewer ref={viewerRef} model={prod.model} />
                  </div>
                )}
                {view360 && (
                  <div className="w-full h-full ">
                    <Viewer model={prod.model} view360 autoRotate />
                  </div>
                )}
                {!view3D && !view360 && (
                  <ImageMagnifier
                    source={img}
                    width={"100%"}
                    height={"100%"}
                  ></ImageMagnifier>
                )}

                <div className="border h-25">
                  <div className="flex justify-between ml-7">
                    <div className="flex mt-4 mx-4">
                      <p className="text-xl font-semibold pt-4"> Door Color </p>
                      {prod?.colour?.map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-3xl cursor-pointer mx-2 my-4"
                          style={{
                            backgroundColor: i,
                            border: color === i ? "2px solid black" : "none",
                            boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                          }}
                          onClick={() => {
                            viewerRef.current.UpdateDoorColor(i);
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex mt-4 mx-4">
                      <p className="text-xl font-semibold pt-4">
                        {" "}
                        Frame Color{" "}
                      </p>
                      {prod?.colour?.map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-3xl cursor-pointer mx-2 my-4"
                          style={{
                            backgroundColor: i,
                            border: color === i ? "2px solid black" : "none",
                            boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                          }}
                          onClick={() => {
                            viewerRef.current.UpdateFrameColor(i);
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-end w-80">
                      <div className="h-20 cursor-pointer mt-2">
                        <img src="../assets/vr-glasses.png" alt="" />
                      </div>
                      <div
                        className="h-20 cursor-pointer mt-2"
                        onClick={() => {
                          viewerRef.current.taggleQR();
                        }}
                      >
                        <img src="../assets/augmented-reality.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center gap-14 -mt-30 mb-10"
            style={{
              height: "500px",
              width: "100%",
            }}
          >
            <div
              className="pr-1 ml-30 mt-10"
              style={{
                height: "80%",
                width: "35%",
                scrollBehavior: "auto",
                overflow: "auto",
                textAlign: "justify",
                marginTop: "280px",
                border: "0.5px solid gray",
              }}
            >
              <div>
                <div className="text-gray-500 text-xl font-mono mt-8 mx-20 text-left align-middle">
                  <p>{prod?.description}</p>
                  <p className="mt-3">Brand : {prod.Company}</p>{" "}
                </div>
                <div className="flex justify-center">
                  <p className="mt-12" style={{ fontSize: 20 }}>
                    Review :
                  </p>
                  <div
                    className="mx-16"
                    style={{ height: "150px", width: "180px" }}
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      style={{}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pr-1 mx-5 justify-start"
              style={{
                height: "80%",
                width: "35%",
                scrollBehavior: "auto",
                overflow: "auto",
                textAlign: "justify",
                marginTop: "280px",
                border: "1px solid gray",
              }}
            >
              <div className="text-gray-500 text-xl font-mono mt-8 text-center align-middle flex ">
                <div className="mx-10 mt-1">
                  <p>Quantity</p>
                </div>
                <div>
                  <QuantityInput />
                </div>
              </div>
              <div className="flex mt-10 gap-10 mx-10">
                <div className="text-gray-500 text-xl font-mono mt-2">
                  Steel Gauge
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  20
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  18
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  16
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  14
                </div>
              </div>
              <div className="flex mt-10 gap-10 mx-10">
                <div className="text-gray-500 text-xl font-mono mt-2 mr-5">
                  Steel Type
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  CK
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  RK
                </div>
                <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  SS
                </div>
                {/* <div
                  className=" h-16 w-16 rounded-xl hover:bg-slate-100 cursor-pointer text-center align-middle py-4"
                  style={{
                    boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  14
                </div> */}
              </div>
              <div>
                <button
                  id="add-to-bag"
                  className="bg-sky-400/30 h-14 w-60 rounded font-mono outline-none border-none z-0 flex justify-center mt-10 hover: bg-sky-400 mx-70"
                  // variant="contained"
                  onClick=""
                  // sx={{
                  //   zIndex: 1300,
                  // }}
                >
                  <div className="mt-3">
                    <LocalMallIcon />
                  </div>{" "}
                  <p className="pl-2 mt-3.5 text-lg ">ORDER NOW</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Description;
