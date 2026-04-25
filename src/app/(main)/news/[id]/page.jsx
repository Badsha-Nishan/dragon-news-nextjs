import { GetNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaEye, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await GetNewsById(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await GetNewsById(id);
  const { title, rating, author, total_view, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-sm container mx-auto mt-6">
      <div className="flex gap-4 items-center px-5 bg-gray-200 py-2 justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              className="rounded-full"
              src={author.img}
              width={40}
              height={40}
              alt={title}
            ></Image>
          </div>
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex text-2xl gap-3">
          <IoMdShare />
          <FaBookmark />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <figure>
          <Image
            src={image_url}
            width={300}
            height={300}
            alt={title}
            className="w-full"
          />
        </figure>
        <p className="">{details}</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="text-orange-400 flex gap-2">
            <p>
              {" "}
              <FaStar />
            </p>
            <p>
              {" "}
              <FaStar />
            </p>
            <p>
              {" "}
              <FaStar />
            </p>
            <p>
              {" "}
              <FaStar />
            </p>
            <p>
              {" "}
              <FaStar />
            </p>
            <p>{rating.number}</p>
          </div>
          <div>
            <button className="btn btn-primary">
              <Link href={`/category/${news.category_id}`}>
                See other news in this category
              </Link>
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
