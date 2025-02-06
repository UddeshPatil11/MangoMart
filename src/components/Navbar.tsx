import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-2xl font-bold">
              MangoMart
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-orange-600 px-3 py-2 rounded-md">Home</Link>
              <Link to="/products" className="hover:bg-orange-600 px-3 py-2 rounded-md">Mango Products</Link>
              <Link to="/bulk-booking" className="hover:bg-orange-600 px-3 py-2 rounded-md">Bulk Booking</Link>
              <Link to="/about" className="hover:bg-orange-600 px-3 py-2 rounded-md">About Us</Link>
              <Link to="/blog" className="hover:bg-orange-600 px-3 py-2 rounded-md">Blog</Link>
              <Link to="/contact" className="hover:bg-orange-600 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 hover:bg-orange-600 rounded-md">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-white text-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              className="md:hidden ml-2 p-2 hover:bg-orange-600 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:bg-orange-600 px-3 py-2 rounded-md">Home</Link>
              <Link to="/products" className="block hover:bg-orange-600 px-3 py-2 rounded-md">Mango Products</Link>
              <Link to="/bulk-booking" className="block hover:bg-orange-600 px-3 py-2 rounded-md">Bulk Booking</Link>
              <Link to="/about" className="block hover:bg-orange-600 px-3 py-2 rounded-md">About Us</Link>
              <Link to="/blog" className="block hover:bg-orange-600 px-3 py-2 rounded-md">Blog</Link>
              <Link to="/contact" className="block hover:bg-orange-600 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;