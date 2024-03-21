"use client";
import React, { useState } from "react";
import DisscussionFourm from "@/app/components/DisscussionFourm";
import MarketStories from "@/app/components/MarketStories";
import Sidebar from "@/app/components/Sidebar";

const DISSCUSSION = "discussion";
const STORIES = "stories";

const MobileView = () => {
  const [selectedView, setSelectedView] = useState(DISSCUSSION);

  const handleViewChange = () => {
    setSelectedView((prev) => (prev === DISSCUSSION ? STORIES : DISSCUSSION));
  };

  return (
    <div className="flex flex-row md:hidden relative">
      <div className=" absolute">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="w-full  bg-blue-800 flex flex-row items-center">
          <button
            className={`flex-1 text-xl border-b-4 border-red-800 text-white font-bold py-4 ${
              selectedView === DISSCUSSION ? "bg-blue-900" : ""
            }`}
            onClick={() => handleViewChange()}
          >
            Discussion Forum
          </button>
          <button
            className={`flex-1 text-xl border-b-4 border-red-800 text-white font-bold py-4 ${
              selectedView === STORIES ? "bg-blue-900" : ""
            }`}
            onClick={() => handleViewChange()}
          >
            Market Stories
          </button>
        </div>
        {/* Render selected view */}
        {selectedView === DISSCUSSION ? (
          <DisscussionFourm />
        ) : (
          <MarketStories />
        )}
      </div>
    </div>
  );
};

export default MobileView;
