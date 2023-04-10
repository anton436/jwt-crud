import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories } = useProducts();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="d-flex flex-column w-50 m-auto">
      <h1>Add product</h1>
      <select>
        <option value="">choose category</option>
      </select>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <input type="text" placeholder="price" />
      <input type="file" accept="image/*" />
      <button> add product</button>
    </div>
  );
};

export default AddProduct;
