import Link from "next/link";
import React from "react";

const LeftSideBar = ({ category, activeId }) => {
  return (
    <div className="col-span-3">
      <h2 className="text-xl font-bold">All Category</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {category.news_category.map((category) => (
          <li
            className={`${
              activeId === category.category_id && "bg-gray-200 rounded-xl"
            } "rounded-md text-gray-500 font-bold"`}
            key={category.category_id}
          >
            <Link
              className="block py-2 px-3 "
              href={`/category/${category.category_id}`}
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
