import { useRef, useState, useEffect } from "react";
import Viewer from "../3d/Viewer";

const Portfolio = () => {
  return (
    <div>
      <hr className="mb-16" />
      <div className="flex-col items-center">
        <div className="text-5xl mb-16 font-semibold">
          MODERN DESIGN PORTFOLIOS
        </div>
        <div className="text-2xl mb-16">
          Baldwin's distinct design portfolios offer beauty, quality and
          durability. Options to fit your project needs.
        </div>
      </div>
      <br />
      <br />
      <div className="flex-row">
        <ul className="flex gap-13">
          <li>
            <div className="relative group  transition-opacity duration-500 ease-in-out delay-0  animate-fade-up">
              <div className="h-[700px] w-[600px] bg-black">
                <a href="/">
                  {/* <img
                    src="/assets/ESTATE_Group_B1.webp"
                    alt=""
                    className="h-[680px]"
                  /> */}
                  <Viewer model="lock4.glb" animation />
                </a>
              </div>
              {/* <div className="absolute h-[700px] w-[600px]   items-center justify-center bg-black/50 top-0">
                <button className="h-[80px] w-[200px] cursor-pointer z-10 text-4xl font-semibold text-white/70 border border-spacing-11 mt-[50%] ml-[30%] group-hover:opacity-0 ">
                  ESTATE
                </button>{" "}
              </div> */}
              <div className="absolute h-[700px] w-[600px]  top-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* <button className="bg-[#83a1ed] p-4 text-center -pt-4 top-[350px] relative  w-1/2 text-2xl hover:cursor-pointer hover:bg-bg-[#83a1ed]">
                  View
                </button> */}
              </div>
            </div>
          </li>
          <li>
            <div className="relative group  animate-fade-up-delay-1">
              <div className="h-[700px] w-[600px] bg-black/5 border ">
                {" "}
                <a href="/">
                  {/* <img
                    src="/assets/PRESTIGE_Group_B1.webp"
                    alt=""
                    className="h-[680px]"
                  /> */}
                  <Viewer model="lock3.glb" animation />
                </a>
              </div>
              {/* <div className="absolute h-[700px] w-[600px]   items-center justify-center bg-black/50 top-0">
                <button className="h-[80px] w-[200px] cursor-pointer z-10 text-4xl font-semibold text-white/70 border border-spacing-11 mt-[50%] ml-[30%] group-hover:opacity-0 ">
                  RESERVE
                </button>{" "}
              </div> */}
              <div className="absolute h-[700px] w-[600px]  top-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {" "}
              </div>
            </div>
          </li>
          <li>
            <div className="relative group  animate-fade-up-delay-2">
              <div className="h-[700px] w-[600px] bg-black">
                {" "}
                <a href="/">
                  {/* <img
                    src="/assets/RESERVE_Group_B1_v2.webp"
                    alt=""
                    className="h-[680px]"
                  /> */}
                  <Viewer model="lock4.glb" animation />
                </a>
              </div>
              <div className="absolute h-[700px] w-[600px]  top-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* <button className="h-[80px] w-[200px] cursor-pointer z-10 text-4xl font-semibold text-white/70 border border-spacing-11 mt-[50%] ml-[30%] group-hover:opacity-0 ">
                  PRESTIGE
                </button>{" "} */}
              </div>
              {/* <div className="absolute h-[700px] w-[600px]  top-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button className="h-[80px] w-[200px] cursor-pointer z-10 text-4xl font-semibold text-white/70 border border-spacing-11 mt-[50%] ml-[30%]">
                  PRESTIGE
                </button>
                <div></div>
              </div> */}
            </div>
          </li>
        </ul>
      </div>
      <hr className="mt-20" />
    </div>
  );
};

export default Portfolio;
