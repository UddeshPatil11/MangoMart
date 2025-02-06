import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import BulkBooking from "./pages/BulkBooking";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import FAQ from "./pages/FAQ";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";  // 🔹 Added AuthProvider
import PrivateRoute from "./components/PrivateRoute";  // 🔹 Added Protected Route
import Login from "./pages/Login";  
import Dashboard from "./pages/Dashboard";  

function App() {
  return (
    <AuthProvider> {/* 🔹 Wrap everything inside AuthProvider */}
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/bulk-booking" element={<BulkBooking />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
                <Route path="/faq" element={<FAQ />} />

                {/* 🔹 Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/dashboard" 
                  element={<PrivateRoute><Dashboard /></PrivateRoute>} 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
