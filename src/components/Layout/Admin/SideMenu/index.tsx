import React from "react";

export const SideMenu: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-white border-r">
      <div className="px-4 py-6">
        <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>

        <nav className="flex flex-col mt-6 space-y-1">
          <a href="" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
            <span className="ml-3 text-sm font-medium"> General </span>
          </a>

          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="ml-3 text-sm font-medium"> Billing </span>
          </a>

          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="ml-3 text-sm font-medium"> Invoices </span>
          </a>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="" className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://www.hyperui.dev/photos/man-4.jpeg"
            alt="Simon Lewis"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">Simon Lewis</strong>

              <span> simonlewis@fakemail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
