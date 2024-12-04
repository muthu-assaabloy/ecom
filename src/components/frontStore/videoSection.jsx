const VideoSection = () => {
  return (
    <div>
      <div className="flex gap-20">
        <div className="flex-col ml-[12%]">
          <div className="text-5xl mb-16 font-semibold">
            INSPIRATION IN MOTION
          </div>
          <div className="text-2xl mb-16">
            View our video gallery to learn more about the Baldwin brand and our
            quality hardware.
          </div>
        </div>
        <ul className="flex gap-2">
          <li>
            <div className="h-[700px] w-[550px] bg-fuchsia-100 animate-fade-up">
              <a href="https://www.youtube.com/watch?v=nmuqDxS2YYs">
                <img
                  src="assets/vdo1.webp"
                  alt=""
                  className="h-[700px] object-cover"
                />
              </a>
            </div>
          </li>
          <li>
            {" "}
            <div className="h-[700px] w-[550px] bg-fuchsia-100 animate-fade-up-delay-1">
              <a href="https://www.youtube.com/watch?v=8cjG1ydDC-U">
                <img
                  src="assets/vdo2.webp"
                  alt=""
                  className="h-[700px] object-cover"
                />
              </a>
            </div>
          </li>
          <li>
            {" "}
            <div className="h-[700px] w-[550px] bg-fuchsia-100 animate-fade-up-delay-2">
              <a href="https://www.youtube.com/watch?v=RKeO9d89rRI">
                <img
                  src="assets/vdo3.webp"
                  alt=""
                  className="h-[700px] object-cover"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;
