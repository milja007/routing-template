import { useSearchParams } from "react-router-dom";
const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");
  const handleSort = () => {
    setSearchParams({ sortBy: "views", category: category });
  };
  return (
    <div>
      <h2>
        Articles
        <p>SortBy: {sortBy}</p>
        <p>Category: {category}</p>
      </h2>
      <button onClick={handleSort}>Sort by Views</button>
    </div>
  );
};

export default Articles;
