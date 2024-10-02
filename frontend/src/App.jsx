import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import BrowserRouter
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<div>Page not found</div>} />
          </Routes>
      </div>
      <Footer />
    </>
      
      
   
  );
};

export default App;
