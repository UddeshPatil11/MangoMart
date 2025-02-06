import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Experience the Finest Indian Mangoes
            </h1>
            <p className="text-xl mb-8">
              Discover premium quality mangoes delivered right to your doorstep
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                to={`/products?category=${encodeURIComponent(category.name)}`}
                key={category.name}
                className="relative rounded-lg overflow-hidden group block"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Fresh Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/products?search=${encodeURIComponent(product.name)}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">
                      ₹{product.price}
                    </span>
                    <button 
  onClick={() => addToCart({ ...product, id: crypto.randomUUID(), quantity: 1 })} 
  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
>
  Add to Cart
</button>


                    {/* <button 
                      onClick={() => addToCart({ ...product, quantity: 1 })} 
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                    >
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  { name: 'Seasonal Favorites', image: 'src/images/alphonso.jpg' },
  { name: 'Premium Selection', image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80' },
  { name: 'Ripeness Ready', image: 'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?auto=format&fit=crop&q=80' },
  { name: 'Regional Delight', image: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?auto=format&fit=crop&q=80' },
];

const featuredProducts = [
  { name: 'Alphonso Mangoes', description: 'Premium Ratnagiri Alphonso mangoes, known for their rich taste', price: 999, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80' },
  { name: 'Kesar Mangoes', description: 'Sweet and aromatic Kesar mangoes from Gujarat', price: 799, image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80' },
  { name: 'Dasheri Mangoes', description: 'Juicy and fiber-free Dasheri mangoes from Lucknow', price: 699, image: 'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?auto=format&fit=crop&q=80' },
];

export default Home;
