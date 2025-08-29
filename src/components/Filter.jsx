import { useEffect, useState } from "react";

function Filter({ handleFilter }) {
  const [categorie, setCategorie] = useState();
  const [displayCount, setDisplayCount] = useState(5);
  const visibleCategories = categorie && categorie.slice(0, displayCount);

  function handleLoadMore() {
    if (categorie.length <= displayCount) return;
    setDisplayCount((prev) => prev + 5);
  }
  function handleLoadLess() {
    if (displayCount === 5) return;
    setDisplayCount((prev) => prev - 5);
    categorie.slice(0, displayCount);
  }

  useEffect(() => {
    async function fetchCategorie() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );

      const data = await res.json();
      setCategorie(data.meals);
    }

    fetchCategorie();
  });

  return (
    <div className="container mx-auto flex flex-col items-start my-4 gap-4">
      <h3 className="sm:text-xl md:text-2xl font-heading font-semibold">
        Filters
      </h3>
      {categorie && (
        <Filters
          handleFilter={handleFilter}
          categorie={categorie}
          visibleCategories={visibleCategories}
          handleLoadMore={handleLoadMore}
          handleLoadLess={handleLoadLess}
          displayCount={displayCount}
        />
      )}
    </div>
  );
}

function Filters({
  visibleCategories,
  categorie,
  handleLoadMore,
  handleLoadLess,
  displayCount,
  handleFilter,
}) {
  return (
    <div className="fex flex-col gap-4 items-start w-fit">
      <h4 className="sm:text-xs md:text-base font-heading font-medium text-left">
        Category
      </h4>
      {visibleCategories.map((el, i) => (
        <span key={i} className="flex gap-2 items-center">
          <input
            className="h-4 w-4 text-logo cursor-pointer"
            type="checkbox"
            value={el.strCategory}
            name={el.strCategory}
            onChange={(e) => handleFilter(e.target.value, e.target.checked)}
          />
          <span className="text-lg font-body font-medium">
            {el.strCategory}
          </span>
        </span>
      ))}
      {displayCount === 5 && displayCount < categorie.length ? (
        <a
          className="text-xs sm:text-base cursor-pointer text-logo underline font-body"
          onClick={handleLoadMore}
        >
          View More
        </a>
      ) : (
        <a
          className="text-xs sm:text-base cursor-pointer text-logo underline font-body"
          onClick={handleLoadLess}
        >
          View Less
        </a>
      )}
    </div>
  );
}

export default Filter;
