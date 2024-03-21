import React from "react";
import DisscussionFourm from "@/app/components/DisscussionFourm";
import MarketStories from "@/app/components/MarketStories";
import Sidebar from "@/app/components/Sidebar";
import MobileView from "@/app/components/MobileView";

export default function Home() {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <DisscussionFourm />
        </div>
        <div className="w-5/12">
          <MarketStories />
        </div>
      </div>
      {/* Mobile view */}
      <MobileView />
    </div>
  );
}
