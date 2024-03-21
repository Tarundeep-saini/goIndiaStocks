import React from "react";
import FourmCard from "@/app/components/FourmCard";
import { getUsersData } from "@/utilities/actions";
const DisscussionFourm = () => {
  const users = getUsersData();
  return (
    <div className="flex flex-col gap-5 pt-4 ">
      <div className="md:flex hidden  ">
        <h2 className=" text-xl md:text-5xl font-extrabold text-red-400 bg-gray-300 px-6 py-2 ml-8 ">
          Disscussion Fourm
        </h2>
      </div>
      <div className="flex flex-col items-center  gap-3   ">
        {users.map((user) => {
          return <FourmCard key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default DisscussionFourm;
