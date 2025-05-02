import React, { useState } from "react";
import "./ShopPage.css";
import { Category } from "../../Components/Utils/Category";
import { dummydata } from "../../Components/Utils/DummyData";
import Product from "../../Components/Product/Product";
const ShopPage = () => {
  const [cate, setcate] = useState(dummydata);
  const handleCategory = (category) => {
    if(category === "All") {
        setcate(dummydata)
    }
    else{
        setcate(dummydata.filter((data) => data.category === category));

    }
  };
  return (
    <div className="shopPage">
      {/* Category Section */}
      <div className="categorySection">
        {Category.map((category) => (
          <div
            key={category.id}
            className="category"
            onClick={() => {
              handleCategory(category.name);
            }}
          >
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

       {/* Products Section */}
       <div className="heading">
      <h1>Trending Products</h1>

      </div>
      <div className="productSection">
        {cate.map((product) => (
          <Product key={product.id} name={product.name} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
