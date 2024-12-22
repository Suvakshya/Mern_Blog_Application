import React from "react";
import Navbar from "../components/Navbar";
import image1 from "../images/image1.jpeg";

const SingleBlog = () => {
  return (
    <>
      <Navbar />
      <div className="single-blog px-[100px] mt-4">
        <div className="flex w-full min-h-[400px] pt-5">
          <div className="left w-[40%] h-full">
            <img className="w-full rounded-lg " src={image1} alt="" />
          </div>
          <div className="ml-4">
            <h3 className="text-3xl font-[500]">Web development</h3>
            <b>Description</b>
            <p className="text-[gray] text-[14px] my-3 mb-3">
              Created: 4 Jan 2023
            </p>
            <p className="text-[gray] text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto culpa voluptates debitis neque?
            </p>
          </div>
        </div>
        <div>Content</div>
      </div>
    </>
  );
};

export default SingleBlog;
