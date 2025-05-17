import React from "react";

const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <>
      <select
        id="categorySelect"
        className="form-select"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">All Categories</option>
        console.log("Categories:", categories);
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoryFilter;
