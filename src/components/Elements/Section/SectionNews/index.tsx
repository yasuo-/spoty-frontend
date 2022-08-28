import React from "react";

import type { NewsItemProps } from "@/components/Elements/Item/NewsItem";

import { NewsItem } from "@/components/Elements/Item/NewsItem";

const items: NewsItemProps[] = [
  {
    id: 1,
    title: "2021年度 第1四半期決算、および通期業績見通しを発表しました。",
    href: "#",
    datetime: "2021-08-13T14:54",
    datetimeJa: "2021年8月13日",
    categoryLabel: "IR情報"
  },
  {
    id: 2,
    title: "デジタル経営基盤構築サービスに新たに中小企業向けパッケージを追加しました。",
    href: "#",
    datetime: "2021-08-10T15:52",
    datetimeJa: "2021年8月10日",
    categoryLabel: "新サービス"
  },
  {
    id: 3,
    title: "ニューズマンスリー日本版 「世界が尊敬する日本人500人」 に当社代表、経営寺花子が選出されました。",
    href: "#",
    datetime: "2021-08-03T13:10",
    datetimeJa: "2021年8月3日",
    categoryLabel: "メディア掲載"
  },
  {
    id: 4,
    title: "DX 博覧会 2022 への出展が決定しました。",
    href: "#",
    datetime: "2021-07-27T11:04",
    datetimeJa: "2021年7月27日",
    categoryLabel: "イベント情報"
  },
  {
    id: 5,
    title: "2022年度新卒採用サイトを公開しました。",
    href: "#",
    datetime: "2021-07-21T10:32",
    datetimeJa: "2021年7月21日",
    categoryLabel: "採用情報"
  }
];

export type SectionNewsProps = {};

export const SectionNews: React.FC<SectionNewsProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline border-b border-gray-300 pb-4 dark:border-gray-600">
          <h2 className="text-lg sm:text-2xl text-gray-900 dark:text-white">新着情報</h2>
          <span
            className="ml-4 text-gray-500 text-sm sm:text-base dark:text-gray-400"
            aria-hidden="true"
            lang="en"
          >
            News
          </span>
        </div>
        <div className="mt-6">
          <ul className="flex flex-col space-y-8 md:space-y-6">
            {items.map((item: NewsItemProps) => (
              <NewsItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className="pt-4 text-center md:text-right">
          <a
            href="#"
            className="flex justify-center items-center px-6 py-3 rounded-md text-base text-white bg-gray-700 sm:inline-flex hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:ring-red-400 dark:focus:ring-offset-gray-900"
          >
            一覧の続きを見る
            <span className="ml-2" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
