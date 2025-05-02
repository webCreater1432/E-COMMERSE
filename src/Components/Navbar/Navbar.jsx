import React from "react";
import "./Navbar.css";
import { FaShopify } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let selector = useSelector(state => state);
  return (
    <div id="navbar">
      <div className="topNavbar">
        <Link to="/">
        <div className="logo">
          <span>E-Shop</span>
          <FaShopify />
        </div>
        </Link>
        <form action="#" className="searchBox">
          <input type="text" placeholder="Search for products..." />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
        <div className="cartBox">
          <AiOutlineShoppingCart />
          <span>0</span>
        </div>
      </div>
      <div className="bottomNavbar">
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/shoppage">
          <li>Shop</li>
          </Link>
          <Link to="/cartpage">
          <li>Cart</li>
          </Link>
          <Link to="contactpage">
          <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
