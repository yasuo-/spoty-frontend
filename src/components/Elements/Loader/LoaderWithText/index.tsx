import React from "react";

export const LoaderWithText = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin relative inline-flex justify-center items-center flex-shrink-0 h-6 w-6 border-4 border-green-200 rounded-full mr-4 dark:border-green-700"
        aria-hidden="true"
      >
        <span className="absolute h-6 w-6 border-4 border-transparent border-r-green-500 rounded-full dark:border-r-green-200" />
      </div>
      読み込んでいます
    </div>
  );
};
