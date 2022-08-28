import React, { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="sticky top-0 z-10 bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm dark:bg-gray-900">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between py-4">
          <div className="w-full flex items-center">
            <h1 className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Website Inc.</span>
                <span className="text-gray-800 dark:text-white" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-auto"
                    fill="currentColor"
                    viewBox="0 0 260 56"
                    width="260"
                    height="56"
                  >
                    <path d="M24.84 55.68a2.05 2.05 0 01-.49-.06 1.84 1.84 0 01-.51-.19L1.19 44.11A2.16 2.16 0 010 42.18V13.81a2.12 2.12 0 01.06-.49 2 2 0 01.26-.63 2 2 0 01.34-.42A2.42 2.42 0 011 12l.21-.12L23.88.55a2.16 2.16 0 011.92 0l22.65 11.32.21.11a2.47 2.47 0 01.41.33 2.12 2.12 0 01.29.38 2.35 2.35 0 01.27.63 2.81 2.81 0 010 .49v28.37a2.17 2.17 0 01-1.18 1.93L25.84 55.43a1.84 1.84 0 01-.51.19 2 2 0 01-.49.06zM27 26.49v23.56l18.4-9.19V17.29zM4.3 40.86l18.39 9.19V26.49L4.3 17.29zM7 13.82l17.89 8.94 17.89-8.94-17.94-8.95zM100.11 34.79l4.34-23h6.63l-7.16 32.31h-6.69L92 22.52 86.72 44.1H80l-7.13-32.27h6.63l4.37 22.92 5.31-22.92h5.63zM134.08 30.12h-12.76v8.64h15v5.34h-21.65V11.83h21.58v5.39h-14.93v7.69h12.76zM140.2 44.1V11.83h11.3q5.87 0 8.91 2.25a7.71 7.71 0 013 6.6 7.28 7.28 0 01-1.22 4.17 7.07 7.07 0 01-3.39 2.65 6.87 6.87 0 013.95 2.5 7.41 7.41 0 011.43 4.61q0 4.65-3 7t-8.47 2.44zm6.65-18.75h4.92c3.35-.06 5-1.39 5-4a3.72 3.72 0 00-1.28-3.16 6.72 6.72 0 00-4-1h-4.65zm0 4.7v8.71h5.69a5.48 5.48 0 003.67-1.12 3.83 3.83 0 001.32-3.09q0-4.44-4.59-4.5zM185.89 35.63a3.42 3.42 0 00-1.33-2.89 17.27 17.27 0 00-4.78-2.12 34.74 34.74 0 01-5.48-2.21q-5.49-3-5.49-8a7.78 7.78 0 011.47-4.66 9.7 9.7 0 014.23-3.21 16.12 16.12 0 016.2-1.15 14.58 14.58 0 016.16 1.25 9.9 9.9 0 014.2 3.54 9.21 9.21 0 011.49 5.18h-6.64a4.35 4.35 0 00-1.4-3.44 5.74 5.74 0 00-3.92-1.23 6.1 6.1 0 00-3.79 1 3.24 3.24 0 00-1.35 2.71 3.13 3.13 0 001.54 2.67 17.87 17.87 0 004.67 2q5.67 1.71 8.26 4.24a8.41 8.41 0 012.59 6.29 7.77 7.77 0 01-3.16 6.57c-2.12 1.59-5 2.38-8.54 2.38a16.46 16.46 0 01-6.78-1.36 10.71 10.71 0 01-4.66-3.73 9.59 9.59 0 01-1.61-5.5h6.67q0 5.34 6.38 5.34a6.19 6.19 0 003.7-1 3.14 3.14 0 001.37-2.67zM204.13 44.1h-6.65V11.83h6.65zM234.58 17.22h-9.88V44.1h-6.65V17.22h-9.75v-5.39h26.28zM257.78 30.12H245v8.64h15v5.34h-21.63V11.83H260v5.39h-15v7.69h12.76z" />
                  </svg>
                </span>
              </a>
            </h1>
            <div className="w-full ml-0 flex justify-end lg:justify-start lg:ml-16">
              <button
                type="button"
                className="flex justify-center items-center h-10 w-10 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-700"
                onClick={toggle}
                aria-expanded={`${isOpen ? "true" : "false"}`}
                aria-owns="mainmenu"
              >
                <span className="sr-only">メインメニューを開閉する</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <nav
                id="mainmenu"
                className={`${isOpen ? "" : "hidden"}
                                absolute top-20 right-0 z-20 bg-white rounded-md shadow-lg p-4 lg:block lg:relative lg:top-0 lg:shadow-none lg:p-0 dark:bg-gray-900`}
                aria-label="メインメニュー"
              >
                <ul className="space-y-2 lg:flex lg:items-center lg:space-x-8 lg:space-y-0">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 rounded-md text-base font-bold text-gray-900 lg:inline-block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-700"
                    >
                      サービス案内
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 rounded-md text-base font-bold text-gray-900 lg:inline-block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-700"
                    >
                      会社情報
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 rounded-md text-base font-bold text-gray-900 lg:inline-block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-700"
                    >
                      実績紹介
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 rounded-md text-base font-bold text-gray-900 lg:inline-block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-700"
                    >
                      お問い合わせ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
