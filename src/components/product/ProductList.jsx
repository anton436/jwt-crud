import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
