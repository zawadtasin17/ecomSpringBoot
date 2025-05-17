import { use, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));

    fetch("http://localhost:8080/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="my-4"> Product Catalog</h1>

      <div className="row-align-items-center mb-4">
        <div className="col-md-4 col-sm-12 mb-12">
          <p>Filter by Category</p>
        </div>

        <div className="col-md-4 col-sm-12 mb-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          ></input>
        </div>

        <div className="col-md-4 col-sm-12 mb-2">
          <select className="form-select" onChange={handleSortChange}>
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>
      </div>

      <div>
        {products.length ? (
          // Display products
          <ProductList products={products} />
        ) : (
          <p> No products available</p>
        )}
      </div>
    </div>
  );
}

export default App;
