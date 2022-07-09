import React from "react";

import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JavaScript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import FireBase from "../assests/firebase.png";
import AWS from "../assests/aws.png";
import GitHub from "../assests/github.png";
import Tailwind from "../assests/tailwind.png";
import Node from "../assests/node.png";
import Next from "../assests/nextjs.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 ">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">These are the tech skills I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT Icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT Icon" />
            <p className="my-4">REACT</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB Icon" />
            <p className="my-4">GITHUB</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND Icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="FIREBASE Icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          {/*  */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS Icon" />
            <p className="my-4">AWS</p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
