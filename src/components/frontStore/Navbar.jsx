import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ path }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-99 transition-all flex duration-300 ${
        scrolled
          ? "bg-black-2 backdrop-blur-sm shadow-md"
          : "bg-black-2 backdrop-blur-xl shadow-md "
      }`}
    >
      <div>
        <div>
          <img src="/assets/logo.png" alt="" className="h-30 w-30" />
        </div>
      </div>
      <div
        className="container flex justify-between items-center gap-x-96"
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <div
          className="text-3xl font-bold mx-10"
          style={{
            color: "rgb(255, 255, 255)",
            fontFamily: "serif",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          BEYOND FLAT SCREENS
        </div>
        <ul className="flex space-x-10  ml-44">
          <li>
            <a href="/home" className="text-xl hover:text-blue-500">
              {path === "/home" ? (
                <div
                  className="font-extrabold text-white"
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                  }}
                >
                  Home
                </div>
              ) : (
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  Home
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="/products" className="text-xl hover:text-blue-500">
              {path === "/products" ? (
                <div
                  className="font-extrabold  text-white"
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                  }}
                >
                  Products
                </div>
              ) : (
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  Products
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="/about" className="text-xl hover:text-blue-500">
              {path === "/about" ? (
                <div
                  className="font-extrabold  text-white"
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                  }}
                >
                  About
                </div>
              ) : (
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  About
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="/admin/dashboard" className="text-xl hover:text-blue-500">
              {path === "/admin/dashboard" ? (
                <div
                  className="font-extrabold  text-white"
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                  }}
                >
                  Back Store
                </div>
              ) : (
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  Back Store
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="/contact" className="text-xl hover:text-blue-500">
              {path === "/contact" ? (
                <div
                  className="font-extrabold  text-white"
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                  }}
                >
                  {" "}
                  Contact
                </div>
              ) : (
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  Contact
                </div>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
