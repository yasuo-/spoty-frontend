import React from "react";

export type NewsItemProps = {
  id: number;
  title: string;
  href: string;
  datetime: string;
  datetimeJa: string;
  categoryLabel: string;
};

export const NewsItem: React.FC<NewsItemProps> = ({
  id,
  title,
  href,
  datetime,
  datetimeJa,
  categoryLabel
}) => {
  return (
    <li
      key={id}
      className="flex flex-col space-y-4 border-b border-gray-100 pb-8 md:flex-row md:items-center md:space-x-6 md:space-y-0 md:pb-6 dark:border-gray-800"
    >
      <div className="flex flex-wrap items-center flex-shrink-0 md:space-x-2 md:flex-nowrap md:justify-between">
        <div className="flex-shrink-0 text-sm mr-4 md:w-36 sm:text-base md:mr-0 dark:text-white">
          <time dateTime={datetime}>{datetimeJa}</time>
        </div>
        <div className="flex-shrink-0 md:w-36">
          <span className="block text-center bg-gray-800 text-gray-50 text-xs rounded py-1 px-4 md:rounded-md md:p-2 dark:bg-gray-100 dark:text-gray-800">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="flex-auto">
        <a href={href} className="underline hover:no-underline dark:text-white">
          {title}
        </a>
      </div>
    </li>
  );
};
