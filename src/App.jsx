import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ShopPage from "./Pages/ShopPage/ShopPage";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
