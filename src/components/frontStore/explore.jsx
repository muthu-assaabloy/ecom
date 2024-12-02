import { TabPanel, TabList } from "@material-tailwind/react";
import { TabsContext } from "@material-tailwind/react/components/Tabs/TabsContext";
import { Box, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

const Explore = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const img = {
    0: [
      "../assets/Estate-Nav(1).webp",
      "../assets/Prestige-Nav.webp",
      "../assets/Reserve-Nav.webp",
    ],
    1: [],
    2: [],
  };
  return (
    <div className="text-center">
      <div className="text-5xl mb-30 font-medium">EXPLORE BY</div>
      <div className="mb-40 text-center ml-[36%]">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
          textColor="inherit"
          indicatorColor="primary"
        >
          <Tab
            label="Portfolio"
            value="1"
            sx={{
              fontSize: "25px",
              marginRight: "30px",
              lineHeight: "50px",
              letterSpacing: "0",
              color: "black",
            }}
          />
          <Tab
            label="Accessory"
            value="2"
            sx={{
              fontSize: "25px",
              marginRight: "30px",
              lineHeight: "50px",
              letterSpacing: "0",
              color: "black",
            }}
          />
          <Tab
            label="Finish"
            value="3"
            sx={{
              fontSize: "25px",
              marginRight: "30px",
              lineHeight: "50px",
              letterSpacing: "0",
              color: "black",
            }}
          />
        </Tabs>
      </div>
      <div>
        <div className="flex-row">
          <ul className="flex gap-13">
            <li>
              <div className="relative  animate-fade-up">
                <div className="h-[1000px] w-[600px] border ">
                  <a href="/">
                    <img
                      src="../assets/Estate-Nav (1).webp"
                      alt=""
                      className="h-[700px]"
                    />
                  </a>
                  <div>
                    <div className="text-3xl mt-20 underline font-medium text-black">
                      ESTATE
                    </div>
                    <div className="text-xl mt-10">
                      Custom-made with unparalleled elegance and <br />{" "}
                      unrivaled quality.
                    </div>
                  </div>
                </div>
                <div className="absolute h-[700px] w-[600px]   items-center justify-center"></div>
              </div>
            </li>
            <li>
              <div className="relative  animate-fade-up-delay-1">
                <div className="h-[1000px] w-[600px] border ">
                  <a href="/">
                    <img
                      src="../assets/Prestige-Nav.webp"
                      alt=""
                      className="h-[700px]"
                    />
                  </a>
                  <div>
                    <div className="text-3xl mt-20 underline font-medium text-black">
                      RESERVE
                    </div>
                    <div className="text-xl mt-10">
                      Custom-made with unparalleled elegance and <br />{" "}
                      unrivaled quality.
                    </div>
                  </div>
                </div>
                <div className="absolute h-[700px] w-[600px]   items-center justify-center"></div>
              </div>
            </li>
            <li>
              <div className="relative  animate-fade-up-delay-2">
                <div className="h-[1000px] w-[600px] border ">
                  <a href="/">
                    <img
                      src="../assets/Reserve-Nav.webp"
                      alt=""
                      className="h-[700px]"
                    />
                  </a>
                  <div>
                    <div className="text-3xl mt-20 underline font-medium text-black">
                      PRESTIGE
                    </div>
                    <div className="text-xl mt-10">
                      Custom-made with unparalleled elegance and <br />{" "}
                      unrivaled quality.
                    </div>
                  </div>
                </div>
                <div className="absolute h-[700px] w-[600px]   items-center justify-center"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
