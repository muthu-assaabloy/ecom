import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory, useLocation } from "react-router";
import Manufacturer from "./Manufacturer";
import Viewer from "../3d/Viewer";
import ContactUs from "./Contact";
import ProductCard from "./Products";
import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "./CarouselComponent";
import Portfolio from "./portfolio";
import VideoSection from "./videoSection";
import Showcases from "./showcases";
import Explore from "./explore";

const LandingPg = ({ path }) => {
  let history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const handleProductsPage = () => {
    history.push("/products");
  };

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const productsSection = document.getElementById("products");
      const aboutSection = document.getElementById("about");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY;

      if (
        scrollPosition < productsSection.offsetTop - 50 &&
        scrollPosition >= homeSection.offsetTop - 50
      ) {
        setActiveSection("home");
      } else if (
        scrollPosition < aboutSection.offsetTop - 50 &&
        scrollPosition >= productsSection.offsetTop - 50
      ) {
        setActiveSection("products");
      } else if (
        scrollPosition < contactSection.offsetTop - 50 &&
        scrollPosition >= aboutSection.offsetTop - 50
      ) {
        setActiveSection("about");
      } else if (scrollPosition >= contactSection.offsetTop - 50) {
        setActiveSection("contact");
      }

      // window.addEventListener("scroll", handleScroll);
      window.scrollTo({
        top: activeSection,
        behavior: "smooth",
      });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar path={path} />

      <CarouselComponent />

      <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-gray-100 w-full "
      >
        <Portfolio />
      </section>
      {/* <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-gray-100 w-full mt-20"
      >
        <ProductCard />
      </section> */}
      <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-gray-100 w-full"
      >
        <VideoSection />
      </section>
      <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-gray-100 w-full"
      >
        <Showcases />
      </section>
      {/* <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-gray-100 w-full mt-55"
      >
        <div
          className="absolute left-50 right-50 flex justify-center rounded-xl"
          style={{
            height: "465px",
            zIndex: 10,
            backgroundColor: "white",
            boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
            top: "58.5rem",
          }}
        >
          <ProductCard />
        </div>
      </section> */}
      <section
        id="about"
        className="h-screen flex  justify-center bg-gray-100 mt-40"
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div>
          <div>
            <h2
              className="text-3xl font-bold mx-11 text-center "
              style={{
                // color: "rgb(85, 86, 91)",
                fontFamily: "Poppins",
                letterSpacing: "1px",
                fontWeight: 500,
              }}
            ></h2>
          </div>
          <div className="mx-11">
            {/* <Manufacturer /> */}
            <Explore />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mt-100"
        style={
          {
            // backgroundImage: "url('https://wallpapercave.com/wp/wp8028403.jpg')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // filter: "blur(8px)",
            // animation: "zoom 10s infinite alternate",
            // zIndex: 0,
          }
        }
      >
        <div>
          {" "}
          {/* Ensures ContactUs is above the background */}
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default LandingPg;
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { useHistory, useLocation } from "react-router";
// import ContactUs from "./Contact";
// import Portfolio from "./portfolio";
// import VideoSection from "./videoSection";
// import Showcases from "./showcases";
// import Explore from "./explore";
// import { Parallax } from "react-parallax";
// import CarouselComponent from "./CarouselComponent";
// import { ParallaxProvider } from "react-scroll-parallax";

// const LandingPg = ({ path }) => {
//   let history = useHistory();
//   const [loaded, setLoaded] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const location = useLocation();

//   const handleProductsPage = () => {
//     history.push("/products");
//   };

//   useEffect(() => {
//     const sectionId = location.pathname.substring(1);
//     const sectionElement = document.getElementById(sectionId);
//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     setLoaded(true);
//     const handleScroll = () => {
//       const sections = ["home", "products", "about", "contact"];
//       const scrollPosition = window.scrollY;

//       sections.forEach((sectionId, index) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const top = section.offsetTop - 50;
//           const bottom = section.offsetTop + section.offsetHeight - 50;

//           if (scrollPosition >= top && scrollPosition < bottom) {
//             setActiveSection(sectionId);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="flex flex-col">
//       <Navbar path={path} />

//       <CarouselComponent />

//       <Parallax
//         bgImage="/assets/portfolio-bg.jpg" // Replace with your background image
//         strength={300}
//       >
//         <section
//           id="portfolio"
//           className="h-screen flex items-center justify-center bg-gray-100 w-full"
//         >
//           <Portfolio />
//         </section>
//       </Parallax>

//       <Parallax
//         bgImage="/assets/video-bg.jpg" // Replace with your background image
//         strength={300}
//       >
//         <section
//           id="video"
//           className="h-screen flex items-center justify-center bg-gray-100 w-full"
//         >
//           <VideoSection />
//         </section>
//       </Parallax>

//       <Parallax
//         bgImage="/assets/showcases-bg.jpg" // Replace with your background image
//         strength={300}
//       >
//         <section
//           id="showcases"
//           className="h-screen flex items-center justify-center bg-gray-100 w-full"
//         >
//           <Showcases />
//         </section>
//       </Parallax>

//       <section
//         id="about"
//         className="h-screen flex justify-center bg-gray-100 mt-40"
//         style={{
//           fontFamily: "Inter, sans-serif",
//         }}
//       >
//         <div>
//           <div>
//             <h2
//               className="text-3xl font-bold mx-11 text-center"
//               style={{
//                 fontFamily: "Poppins",
//                 letterSpacing: "1px",
//                 fontWeight: 500,
//               }}
//             >
//               {/* Your Section Title */}
//             </h2>
//           </div>
//           <div className="mx-11">
//             <Explore />
//           </div>
//         </div>
//       </section>

//       <Parallax
//         bgImage="https://wallpapercave.com/wp/wp8028403.jpg"
//         strength={300}
//       >
//         <section
//           id="contact"
//           className="h-screen flex items-center justify-center bg-gray-100 mt-30"
//           style={{
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             zIndex: 0,
//           }}
//         >
//           <div className="relative z-10">
//             <ContactUs />
//           </div>
//         </section>
//       </Parallax>
//     </div>
//   );
// };

// export default LandingPg;
