import { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ProdData from "../data/ProdData";
import { SketchPicker } from "react-color";
import { useHistory } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AllProducts } from "../../Common/DoorConstants";
import Viewer from "../3d/Viewer";

const ProductCard = () => {
  const [color, setColor] = useState("#fff");
  const history = useHistory();
  const handleColorChange = (color) => {
    console.log(color);
    setColor(color);
  };
  const viewerRef = useRef([]);
  const descriptionPage = (id) => {
    history.push(`/description/${id}`);
  };
  const landingPage = () => {
    history.push("/home");
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex mx-11 mt-10">
          {/* <div className="my-4 cursor-pointer">
            <ArrowBackIosIcon onClick={landingPage} />
          </div> */}
          <div className="text-5xl mb-16 font-semibold text-black" style={{}}>
            OUR PRODUCTS
          </div>
        </div>
        {/* <div className="flex mr-20">
          <div>
            <FormControl sx={{ mx: 6, minWidth: 200, mt: 16 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select id="userSelect" value="" label="" onChange="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"User 1"}>Door</MenuItem>
                <MenuItem value={"User 2"}>Locks</MenuItem>
              
              </Select>
            </FormControl>
          </div>
         
        </div> */}
      </div>
      <hr className="mt-4" />
      <div
        style={{
          height: "150%",
          scrollBehavior: "auto",
          overflow: "auto",
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 mt-11 mx-14 text-center"
          style={{
            height: "100%",
            scrollBehavior: "auto",
            overflow: "auto",
          }}
        >
          {AllProducts.map((item, index) => (
            <Card
              key={item.id}
              style={{
                height: "550px",
                width: "400px",
                borderRadius: "10px",
                boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <CardHeader
                style={{
                  width: "250px",
                  paddingTop: "10px",
                  marginLeft: "0",
                  marginRight: "0",
                  textAlign: "center",
                }}
              >
                <div style={{ height: "250px", width: "250px" }}>
                  <img
                    src={item.images[0]}
                    alt=""
                    className="h-full w-full object-contain transition-transform duration-300 ease-in-out"
                  />
                </div>
              </CardHeader>
              <CardActionArea onClick={() => descriptionPage(item.id)}>
                <div className="h-[350px] w-[300px] object-contain transition-transform duration-300 ease-in-out ml-10">
                  <Viewer
                    ref={(el) => (viewerRef.current[index] = el)}
                    model={item.model}
                    autoRotate
                  />
                </div>
                {/* <img
                  src={item.images[0]}
                  alt=""
                  className="h-full w-full object-contain transition-transform duration-300 ease-in-out"
                /> */}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className=" font-mono"
                    style={{
                      fontSize: "18px",
                      fontFamily: "initial",
                      fontWeight: "550",
                    }}
                  >
                    {item.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography> */}
                  {/* <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <div className="flex justify-center mt-2">
                {item?.colour?.map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-3xl cursor-pointer mx-2 "
                    style={{
                      backgroundColor: i,
                      border: color === i ? "2px solid black" : "none",
                      boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => {
                      viewerRef.current[index].UpdateDoorColor(i);
                    }}
                  ></div>
                ))}
              </div>
              <hr className="mt-5" />
              <div className="flex justify-between mt-2">
                <div className="ml-2 flex">
                  <img src="assets/dollar.png" alt="" className="h-8 w-8" />
                  <p className="mt-1">{item.price}</p>
                </div>
                <div className="mr-5">
                  <ShoppingCartIcon />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
};

export default ProductCard;
