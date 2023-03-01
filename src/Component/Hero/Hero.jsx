import React from "react";
import hero from "../../assets/img/hero.jpg";
const Hero = () => {
  return (
    <div className="w-full h-96 bg-red-600 relative">
      <img className="h-full w-full object-cover" src={hero} alt="" />
      <div className="absolute top-0 bg-black bg-opacity-25 w-full h-full flex items-end justify-center">
        <div className="bg-white mx-4 text-center p-4 md:px-16 md:py-8 rounded-t-md ">
          <h1 className="text-2xl md:text-4xl font-bold">
            Delicious Food, Delivered To You
          </h1>
          <p className="text-xs md:text-base mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem
          </p>
          <p className="text-xs md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem
            alias consequuntur dolores earum reiciendis soluta aliquam fuga est.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
