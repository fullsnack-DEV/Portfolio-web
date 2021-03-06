import React from "react";
import LineImage from "../Assests/icons8-horizontal-line-30.png";
import twitter from "../Assests/icons8-twitter-48.png";
import Linkedin from "../Assests/icons8-linkedin-48.png";
import Hashnode from "../Assests/icons8-hashnode-48.png";
import { Button } from "../components/button";

export const HeroSection = () => {
  return (
    <div className="max-w-full  h-screen bg-blackbackground">
      <div className="w-3/4 py-6 flex items-center justify-center   m-auto text-white font-semibold ">
        <img
          src={twitter}
          alt="twitter logo"
          className="h-8 px-3 cursor-pointer "
        />
        <img
          src={Linkedin}
          alt="linkedin logo"
          className="h-8 px-3 cursor-pointer "
        />
        <img
          src={Hashnode}
          alt="Hashnode logo"
          className="h-8 px-3 cursor-pointer "
        />
      </div>

      <main className="max-w-full m-auto pt-6 flex items-center flex-col px-10  ">
        <p className="flex flex-col items-center text-white font-bold tracking-widest font-Kanit text-2xl  ">
          I'm Pratik
          <div className="px-8">
            <img
              src={LineImage}
              className="w-14 h-8 text-white  bg-transparent"
            />
          </div>
        </p>

        <span className=" mt-2 text-transparent text-xl bg-clip-text font-extrabold  tracking-widest bg-gradient-to-br from-gradred to-gradredark">
          Frontend Developer
        </span>

        <h1 className=" -mt-4 max-w-full text-5xl tracking-wider font-Fredoka leading-extra-loose font-semibold text-yellow-50 text-center py-5">
          Crafting
          <br />
          <span className="text-transparent text-left  bg-clip-text bg-gradient-to-br from-gradpink to-gradorange"></span>
          <span className="text-transparent  bg-clip-text bg-gradient-to-br from-gradpink to-gradorange">
            Mobile
          </span>
          <br />
          Applications.
        </h1>

        {/* <p className="text-white font-Fredoka font-medium text-sm leading-8 tracking-wide ">
          {" "}
          I'am Actively Looking for opportunities. Please Download My Resume
          from here{" "}
        </p>

        <div className="border-2 border-cyan-400 rounded-xl mt-4 ">
          <h3 className="px-5 py-1 font-medium font-Fredoka text-white ">
            Resume
          </h3>
        </div> */}

        <div className="mt-7">
          <Button title={"View Projects"} />
        </div>
      </main>
    </div>
  );
};
