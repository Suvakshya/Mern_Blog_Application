import React from "react";
import image1 from "../images/image1.jpeg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <img className="w-full h-[60%] rounded-lg mb-2" src={image1} alt="" />
        <h3>Web development</h3>
        <p className="text-[gray] text-[14px] w-[90%] line-clamp-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos
          culpa eaque exercitationem iste iure! culpa eaque exercitationem iste
          iure! culpa eaque exercitationem iste iure! culpa eaque exercitationem
          iste iure! culpa eaque exercitationem iste iure!
        </p>
      </div>
    </>
  );
};

export default Blog;
