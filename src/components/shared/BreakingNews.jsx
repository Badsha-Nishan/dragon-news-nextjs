import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      _id: "1",
      title: "Breaking News: Major Event Unfolds in the City",
    },
    {
      _id: "2",
      title: "Breaking News: New Policy Announced by the Government",
    },
    {
      _id: "3",
      title: "Breaking News: Sports Team Wins Championship",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex justify-center items-center gap-3 container bg-gray-200 py-4 px-3 mx-auto">
      <button className="btn bg-red-500 text-white">Latest</button>
      <Marquee pauseOnHover speed={80}>
        {news.map((n) => (
          <span className="mr-10" key={n._id}>
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
