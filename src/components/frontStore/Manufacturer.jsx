import React, { useState, useEffect } from "react";

const Manufacturer = () => {
  const manufactures = ["CECO", "CURRIES", "FLEMING", "BARON", "SARGENT"];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="items-center">
      <div className="flex gap-20 justify-center">
        {manufactures.map((manufacturer, index) => (
          <div
            key={manufacturer}
            className={`h-72 w-72 rounded-lg items-center align-middle text-center transform transition-all duration-700 ease-in-out ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              fontWeight: "600",
              transitionDelay: `${index * 200}ms`,
            }}
          >
            <img
              src="/assets/opened-door-aperture.png"
              alt=""
              className="h-40 w-40 items-center mt-4 ml-14"
            />
            <p className="text-lg mt-10">{manufacturer}</p>
          </div>
        ))}
      </div>
      <div
        className={` justify-start
               py-2 px-4 mt-3 rounded-lg ml-67 ${
                 loaded ? "opacity-100" : "opacity-0"
               } transition-opacity duration-1000 delay-75`}
        style={{
          background: "linear-gradient(to right, #A7B1C0, #7BA6DA)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          color: "black",
          fontFamily: "Poppins",
          letterSpacing: "1px",
          fontWeight: 500,
          transition: "all 0.5s ease-in-out",
          width: "77%",
        }}
      >
        <p className="text-lg text-gray-600 mt-8 mx-20">
          Enjoy the convenience of shopping for doors and frames from the
          comfort of your home or office. Our user-friendly interface and secure
          payment gateways make your online shopping experience smooth and
          hassle-free.
        </p>
        {/* <p className="text-lg text-gray-600 mt-8 mx-20 mb-3">
          ASSA ABLOY is the global leader in access solutions. Our innovative
          products, solutions, and services ensure safety, security, and
          convenience in residential, commercial, and institutional
          environments. We are committed to advancing security technology and
          sustainability in all our products.
        </p> */}
      </div>
    </div>
  );
};

export default Manufacturer;
