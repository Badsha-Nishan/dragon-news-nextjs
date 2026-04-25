import LeftSideBar from "@/components/homepage/LeftSideBar";
import RightSideBar from "@/components/homepage/RightSideBar";
import { GetCategory, GetNewsByCategory } from "@/lib/data";

export default async function Home() {
  const category = await GetCategory();
  const news = await GetNewsByCategory("04");
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-8">
      <LeftSideBar category={category} activeId={"02"} />
      <div className="col-span-6">
        <h2 className="text-xl font-bold">News by Category</h2>
        <div className="space-y-4">
          {news.map((n) => (
            <div key={n._id} className="p-6 rounded-md border">{n.title}</div>
          ))}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}
