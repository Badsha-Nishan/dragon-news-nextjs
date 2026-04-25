const GetCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const category = await GetCategory();
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-3">
        <h2 className="text-xl font-bold">All Category</h2>
        <ul className="mt-5 flex flex-col gap-3">
          {category.news_category.map((category) => (
            <li
              className="bg-gray-200 p-3 rounded-md text-gray-500"
              key={category.category_id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6">Dragon News Home</div>
      <div className="col-span-3">Social</div>
    </div>
  );
}
