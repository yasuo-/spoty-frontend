import React from "react";

export const EyeCatchingWithBgImageHero = () => {
  return (
    <div className="bg-white py-16 px-4 lg:py-24 relative">
      <div className="absolute z-0 h-full w-full inset-0 overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src="https://burnworks-ui.imgix.net/img/sample-cc0-02.jpg"
          alt=""
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-50 bg-opacity-80" />
      </div>
      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold text-left text-gray-900 sm:text-5xl md:text-6xl sm:text-center">
          <span className="inline xl:inline sm:block">
            <span className="text-indigo-800">データ駆動型経営</span>で
          </span>
          <span className="inline mt-0 xl:inline sm:block xl:mt-0 sm:mt-4">ビジネスに競争力を</span>
        </h2>
        <p className="mt-6 max-w-md mx-auto text-base text-left text-gray-800 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl md:text-center">
          Example
          株式会社のデジタル経営基盤構築サービスは、お客様のデータ駆動型経営を実現、意思決定を円滑にし、ビジネスに競争力をもたらします。
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:justify-center sm:space-x-6 sm:space-y-0 md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:text-lg md:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              サービス詳細
            </a>
          </div>
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              お見積もり・ご相談
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
