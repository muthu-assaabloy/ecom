import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Viewer from "../3d/Viewer";

const CarouselComponent = () => {
  return (
    <div className="w-screen  pt-[100px] ">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
        interval={10000}
      >
        <div className="h-[90vh] w-full bg-black-2 flex">
          {/* <div className="w-[900px]"></div> */}
          <Viewer model="lock1.glb" waterAnimation />
          {/* <video
            className="object-fill"
            autoPlay
            muted
            playsInline
            tabIndex={-1}
          >
            <source
              src="https://images.baldwinhardware.com/is/content/Baldwin/homepagev15"
              type="video/mp4"
              tabIndex={-1}
            />
          </video> */}
        </div>
        <div className="h-[90vh]">
          <div className="grid grid-cols-5 w-full h-full bg-gradient-to-r from-[#000000] to-black">
            <div className="col-span-3 h-full  flex-col grid items-center text-center text-xl text-gray-2">
              <div>
                <p className="text-3xl pb-2 font-bold">Electronic Door Locks</p>
                <p className=" ">
                  Aesthetically pleasing and convenient, Baldwin has created
                </p>
                <p>
                  Electronic Deadbolts that eliminate the worry involved with a
                </p>
                <p>
                  lost or stolen key! A touch of tech, matched with the beauty
                </p>
                <p>
                  {" "}
                  of our obsessive design, all with the security known from
                  Baldwin.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <Viewer model="lock4.glb" animation />
            </div>
          </div>
        </div>
        <div className="h-[90vh]">
          <div className="grid grid-cols-5 w-full h-full bg-gradient-to-r from-[#000000] to-black">
            <div className="col-span-3 h-full  flex-col grid items-center text-center text-xl text-gray-2">
              <div>
                <p className="text-3xl pb-2 font-bold">
                  Minneapolis Touchscreen Z-Wave Deadbolt
                </p>
                <p className=" ">
                  Satin Nickel that is smooth and clean is a nickel-plated
                  brass,
                </p>
                <p>
                  bringing the beauty of the finish with the weight of brass.
                </p>
                <p>
                  All covered by the Baldwin Limited Lifetime Finish™ Warranty,
                </p>
                <p>
                  creating a crisp and clean look for both traditional and
                  contemporary designs.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <Viewer model="lock3.glb" animation />
            </div>
          </div>
          {/* <img src="/assets/gramercy.webp" /> */}
        </div>
        <div className="h-[90vh]">
          {/* <div
            className="w-screen h-full"
            style={{
              backgroundImage:
                "url(" + "/assets/Baldwin-Reserve-Hero.webp" + " )",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          > */}
          {/* <Viewer model="lock2.glb" />
          </div> */}
          <div className="grid grid-cols-5 w-full h-full bg-gradient-to-r from-[#000000] to-black">
            <div className="col-span-2">
              <Viewer model="lock2.glb" animation />
            </div>
            <div className="col-span-3 h-full  flex-col grid items-center text-center text-xl text-gray-2">
              <div>
                <p className="text-3xl pb-2 font-bold">Soho Keypad Deadbolt</p>
                <p className=" ">
                  Statin Nickel that is smooth and clean is a nickel-plated
                  brass,
                </p>
                <p>
                  ringing the beauty of the finish with the weight of brass.
                </p>
                <p>
                  All covered by the Baldwin Limited Lifetime Finish™ Warranty,
                </p>
                <p>
                  creating a crisp and clean look for both traditional and
                  contemporary designs
                </p>
              </div>
            </div>
          </div>
          {/* <img src="/assets/Baldwin-Reserve-Hero.webp" /> */}
        </div>
        <div className="h-[90vh]">
          <div className="grid grid-cols-5 w-full h-full bg-gradient-to-r from-[#000000] to-black">
            <div className="col-span-2">
              <Viewer model="lock5.glb" animation />
            </div>
            <div className="col-span-3 h-full  flex-col grid items-center text-center text-xl text-gray-2">
              <div className="">
                <li className="text-3xl pb-2 font-bold">
                  {" "}
                  L029 Gramercy Lever with R017 Rose- Privacy
                </li>
                <ul className="text-left left-1/4 relative list-disc">
                  <li className=" ">
                    Latch has 2 interchangeable faceplates; round corner and
                    square corner
                  </li>
                  <li>
                    <p>
                      Knob or lever set paired with roses with a privacy lock to
                      both close
                    </p>
                    and secure any door with the 2.125" standard door
                    preparation.
                  </li>
                  <li>
                    Privacy sets include everything needed to install the lock
                    onto your doo{" "}
                  </li>
                  <li>
                    Latch has adjustable backset 2-3/8" to 2-3/4" to fit all
                    standard door preparations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <img src="/assets/cabinet-hardware-banner-s3.webp" /> */}
        </div>
        <div className="h-[90vh]">
          <div className="grid grid-cols-5 w-full h-full bg-gradient-to-r from-[#000000] to-black">
            <div className="col-span-2">
              <Viewer model="lock6.glb" animation />
            </div>
            <div className="col-span-3 h-full  flex-col grid items-center text-center text-xl text-gray-2">
              <div className="">
                <li className="text-3xl pb-2 font-bold">
                  {" "}
                  L029 Gramercy Lever with R017 Rose- Privacy
                </li>
                <ul className="text-left left-1/4 relative list-disc">
                  <li className=" ">
                    Latch has 2 interchangeable faceplates; round corner and
                    square corner
                  </li>
                  <li>
                    <p>
                      Knob or lever set paired with roses with a privacy lock to
                      both close
                    </p>
                    and secure any door with the 2.125" standard door
                    preparation.
                  </li>
                  <li>
                    Privacy sets include everything needed to install the lock
                    onto your doo{" "}
                  </li>
                  <li>
                    Latch has adjustable backset 2-3/8" to 2-3/4" to fit all
                    standard door preparations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <img src="/assets/Estate-Quick-Ship-Hero-L029-044_B1.webp" /> */}
        </div>
        <div className="h-[90vh]">
          <img src="/assets/prestige-hero-v2.webp" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
