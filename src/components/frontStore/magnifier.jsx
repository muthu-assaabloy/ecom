import React, { useState } from "react";

// interface ImageMagnifierProps {
//   source: any;
//   width: string;
//   height: string;
//   magnifierHeight?: number;
//   magnifierWidth?: number;
//   zoomLevel?: number;
// }

const ImageMagnifier = ({
  source,
  width,
  height,
  magnifierHeight = 600,
  magnifierWidth = 550,
  zoomLevel = 3.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      <img
        src={source}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div style={{ position: "relative", left: "100vh", top: "-500px" }}>
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "sticky",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            top: `5px`,
            left: `5px`,
            opacity: "1",
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${source}')`,
            backgroundRepeat: "no-repeat",

            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageMagnifier;
