import React from "react";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="border border-dark m-3">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.category.title}</p>
      <p>{item.description}</p>
      <p>{item.likes}</p>

      {item.is_author ? (
        <>
          <button>Edit</button>
          <button>Delete</button>
        </>
      ) : null}
    </div>
  );
};

export default ProductCard;
