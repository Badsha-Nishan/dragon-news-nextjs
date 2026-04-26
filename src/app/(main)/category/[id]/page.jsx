import LeftSideBar from "@/components/homepage/LeftSideBar";
import NewsCard from "@/components/homepage/NewsCard";
import RightSideBar from "@/components/homepage/RightSideBar";
import { GetCategory, GetNewsByCategory } from "@/lib/data";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const category = await GetCategory();
  const news = await GetNewsByCategory(id);
  return (
    <div className="grid md:grid-cols-12 gap-4 container mx-auto my-8">
      <LeftSideBar category={category} activeId={id} />
      <div className="col-span-6">
        <h2 className="text-xl font-bold">News by Category</h2>
        <div className="space-y-4 my-5">
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} n={n} />)
          ) : (
            <h2 className="text-3xl text-center my-6 text-purple-500 font-bold">
              No News Found
            </h2>
          )}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default NewsCategoryPage;
