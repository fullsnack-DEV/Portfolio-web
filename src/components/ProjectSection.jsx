import React from "react";
import ReactPlayer from "react-player";
import Appvideo from "../Assests/Video/Screenrecorder-2021-08-11-09-51-58-81.mp4";

export const ProjectSection = () => {
  return (
    <div className="w-full h-full bg-black ">
      <div className=" flex flex-col items-center p-7 overflow-hidden overscroll-x-none h-full ">
        <ReactPlayer
          url={Appvideo}
          loop={true}
          playing={true}
          controls={false}
        />

        <div className="p-3 mt-3 flex flex-col items-center ">
          <h3 className=" font-Fredoka font-bold text-xl mt-4 text-transparent  bg-clip-text bg-gradient-to-br from-titlegrad1 to-titlegrad2 ">
            Book My Seat App
          </h3>
          <p className="text-white mt-4 mb-4 font-Fredoka   ">
            {" "}
            Application is build using React-Native. Design is inspired from
            dribble. To fetch the Movie data it uses the IMDB API. For state
            Management I have used Redux{" "}
          </p>
          <h3 className="font-semibold text-lg  border-b-2  border-titlegrad2 font-Kanit text-transparent  bg-clip-text bg-gradient-to-br from-viewcodebg1 to-viewcodebg2">
            View Code
          </h3>
        </div>
      </div>
    </div>
  );
};
