import React from "react";
import Story from "@/app/components/Story";
import { getStories } from "@/utilities/actions";

const MarketStores = () => {
  const stories = getStories();
  return (
    <div className=" flex flex-col px-5 py-4 gap-8 ">
      <div className="md:flex hidden  ">
        <h2 className=" text-xl md:text-3xl font-extrabold text-red-400 bg-gray-300 px-6 py-2 ml-8 ">
          MarketStories
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {stories.map((story) => (
          <Story key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default MarketStores;
