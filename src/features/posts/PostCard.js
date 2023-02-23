import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function PostCard() {
  return (
    <div className="flex flex-col drop-shadow-[0_20px_20px_rgba(0,0,0,0.07)] border-2 p-4 sm:p-8 rounded-xl bg-white border-gray-100">
      <div className="border-b-2 pb-8 border-gray-100 mb-6">
        <h2 className="font-bold text-lg text-left mb-4">This is a title of a reddit post</h2>
        <img
          src="https://images.unsplash.com/photo-1677108581323-7050fbfd528f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Post"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <p className="text-gray-300 text-[12px] sm:text-base">
            Posted by <span className="text-blue-600 font-bold">mohieman</span>
          </p>
          <p className="text-gray-300 text-[12px] sm:text-base">7 hours ago</p>
        </div>
        <button className="text-gray-300 text-[12px] sm:text-base">
          <FontAwesomeIcon icon={faComment} /> 523 Comments
        </button>
      </div>
    </div>
  );
}
