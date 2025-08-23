"use client";
import React from "react";

const CommentForm = () => {
  return (
    <div className="w-full max-w-4xl py-15">
      {/* Heading */}
      <h2 className="text-[20px] font-[oswald] mb-6"style={{fontWeight:600}}>LEAVE A REPLY</h2>

      {/* Form */}
      <form className="space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 "
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
          />
        </div>

        {/* Website */}
        <input
          type="text"
          placeholder="Enter Website"
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 "
        />

        {/* Comments */}
        <textarea
          placeholder="Enter Comments"
          rows={6}
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-8 py-3 border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          POST COMMENT
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
