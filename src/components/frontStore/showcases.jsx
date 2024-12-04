const Showcases = () => {
  return (
    <div className="bg-orange-100/40">
      <div className="flex gap-50  h-[50%] mr-50 mb-60">
        <div className="grid grid-cols-2 grid-rows-2 gap-0">
          <div className="left-0 h-[150px]">
            <img src="/assets/house1.webp" alt="" />
          </div>
          <div className="left-0 right-0 h-[465px]">
            <img src="/assets/house2.webp" alt="" width={"100%"} />
          </div>
          <div className="left-0 right-0 h-[100px]">
            <img src="/assets/house3.webp" alt="" width={"100%"} />
          </div>
          <div className="left-0 right-0 h-[100px]">
            <img src="/assets/house4.webp" alt="" />
          </div>
        </div>
        <div className="text-center text-black-2">
          <div className="text-5xl mb-16 font-semibold mt-[70%] ">
            BALDWIN IN ACTION
          </div>
          <div className="text-2xl mb-16 font-normal">
            The charm lies in the finer points, and decorative <br /> hardware
            has the power to perfect and enhance the <br /> entirety of your
            home's design. Explore how Baldwin is <br /> seamlessly integrated
            into the aesthetics of these
            <br />
            beautiful homes.
          </div>
          <div>
            {" "}
            <button
              className="h-[50px] w-[400px] cursor-pointer z-10 text-xl font-semibold text-black-2 border border-spacing-11"
              style={{
                // fontFamily:"serif"
                lineHeight: "20px",
              }}
            >
              Explore Baldwin's Project's Showcases
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
