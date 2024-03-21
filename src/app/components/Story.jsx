import React from "react";
import Image from "next/image";

const Story = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col  justify-center items-center border-2 rounded-xl overflow-hidden  ">
      <Image
        src={imageSrc}
        width={400}
        height={70}
        className=" h-48 w-full object-cover  md:h-60"
        alt="Stories"
      />
      <div className=" px-8 pb-4 ">
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Story;
