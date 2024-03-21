import React from "react";
import Image from "next/image";

const ForumCard = ({
  name,
  imgSrc,
  tag,
  posted,
  desc,
  likes,
  views,
  comments,
}) => {
  return (
    <div className=" p-2 overflow-hidden">
      <div className="w-full md:w-11/12 border-2 p-4 rounded-lg flex flex-col gap-5 shadow-xl md:drop-shadow-2xl">
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-2 md:gap-8 items-center">
            <Image
              src={imgSrc}
              alt="Picture of the author"
              width={40}
              height={40}
              className="rounded-full h-10 md:h-14 md:w-14"
            />
            <h2 className="font-bold text-md md:text-2xl">{name}</h2>
            <h2 className="bg-blue-800  px-1 md:px-3 py-0 md:py-1 rounded-full text-white  text-sm  md:text-xl">
              {tag}
            </h2>
          </div>
          <h2 className="text-blue-600  text-sm  md:text:xl "> {posted}</h2>
        </div>

        <div className="px-4">
          <p className="text-wrap text-sm md:text-xl tracking-wide">{desc}</p>
        </div>

        <div className="flex justify-evenly w-full px-2 md:px-4">
          <div className="flex items-center gap-0 md:gap-2">
            <Image
              src="/postSvg/heart.svg"
              width={25}
              height={25}
              className=" h-4 md:h-6 "
              alt="heart"
            />
            <h2 className=" text-sm md:text-xl">{likes}</h2>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/postSvg/eye.svg"
              width={25}
              height={25}
              className=" h-4 md:h-6 "
              alt="eye"
            />
            <h2 className=" text-sm md:text-xl">{views}</h2>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/postSvg/comment.svg"
              width={25}
              height={25}
              className=" h-4 md:h-6 "
              alt="comment"
            />
            <h2 className=" text-sm md:text-xl">{comments} Comments </h2>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/postSvg/share.svg"
              width={25}
              height={25}
              className=" h-4 md:h-6 "
              alt="share"
            />
            <h2 className=" text-sm md:text-xl">Share</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
