import React from "react";

export const TimelineStep: React.FC = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          <li className="flex items-center p-2 bg-white">
            <span className="w-6 h-6 text-[10px] font-bold leading-6 bg-gray-100 text-center rounded-full">
              1
            </span>

            <span className="hidden sm:block sm:ml-2"> Details </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span className="w-6 h-6 text-[10px] font-bold leading-6 text-center text-white bg-blue-600 rounded-full">
              2
            </span>

            <span className="hidden sm:block sm:ml-2"> Address </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span className="w-6 h-6 text-[10px] font-bold leading-6 text-center bg-gray-100 rounded-full">
              3
            </span>

            <span className="hidden sm:block sm:ml-2"> Payment </span>
          </li>
        </ol>
      </div>
    </div>
  );
};
