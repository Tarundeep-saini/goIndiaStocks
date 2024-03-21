"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const menu = [
  {
    title: "Discussion Forum",
    path: "/",
  },
  {
    title: "Market Stories",
    path: "/",
  },
  {
    title: "Sentiment",
    path: "/",
  },
  {
    title: "Market",
    path: "/",
  },
  {
    title: "Sector",
    path: "/",
  },
  {
    title: "Watchlist",
    path: "/",
  },
  {
    title: "Events",
    path: "/",
  },
  {
    title: "News/Interviews",
    path: "/",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      // Disable scrolling when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when sidebar is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow property when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const handleSidebarOpen = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-row justify-left overflow-hidden">
      {/* Sidebar content */}
      <div
        className={`flex flex-col bg-blue-900    transition-all duration-300 ${
          isSidebarOpen ? "w-56 md:w-80" : "w-0"
        }`}
      >
        {isSidebarOpen && (
          <div className="flex justify-between items-center w-full h-16 border-b-2 px-2 py-8">
            {/* Header */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" w-7 h-7  md:w-10 md:h-10 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className=" text-md md:text-xl font-black text-white">
                Hello, User
              </h2>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5  md:w-9 md:h-9 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
        {/* Menu items */}
        <div className="flex flex-col">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white text-lg md:text-xl font-semibold py-5 pl-4 hover:bg-indigo-950"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Sidebar toggle button */}
      <div className="w-4 bg-white  flex items-center justify-center bg-opacity-0">
        <button
          className="font-black h-24 w-full bg-blue-800 text-white"
          onClick={() => handleSidebarOpen()}
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
