import React, { useState } from "react";
import "./HomePage.css";
import Hero from "../../Components/Hero/Hero";
import Product from "../../Components/Product/Product";
import { dummydata } from './../../Components/Utils/DummyData';
import { Category } from './../../Components/Utils/Category';
const HomePage = () => {
  const [cate, setcate] = useState(dummydata)
  const handleCategory = (category) => {
    setcate(dummydata.filter((data) => data.category === category));
  };
  return (
    <div>
      <Hero />

      {/* Category Section */}
      <div className="categorySection">
        {Category.slice(0,4).map((category) => (
          <div key={category.id} className="category" onClick={()=>{
            handleCategory(category.name);
          }}>
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
        {cate.slice(0,10).map((product) => (
          <Product key ={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
