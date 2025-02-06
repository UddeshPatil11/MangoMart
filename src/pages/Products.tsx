import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const allProducts = {
  Langra: {
    description: 'Juicy and aromatic',
    price: 699,
    image: 'src/images/Langra.jpg',
    weight: '1kg',
    origin: 'Uttar Pradesh',
  },
  Kesar: {
    description: 'Sweet and saffron-colored',
    price: 799,
    image: 'src/images/kesar.jpg',
    weight: '1kg',
    origin: 'Gujarat',
  },
  Himsagar: {
    description: 'Smooth-textured and fiberless',
    price: 749,
    image: 'src/images/himsagar.jpg',
    weight: '1kg',
    origin: 'West Bengal',
  },
  Alphonso: {
    description: 'Rich and creamy',
    price: 999,
    image: 'src/images/alphonso.jpg',
    weight: '1kg',
    origin: 'Maharashtra',
  },
  'GI Tagged Kesar': {
    description: 'Authentic GI-tagged Kesar',
    price: 899,
    image: 'src/images/GL tagged kesar.jpg',
    weight: '1kg',
    origin: 'Gujarat',
  },
  'Organic Alphonso': {
    description: '100% organic Alphonso',
    price: 1099,
    image: 'src/images/Organic Alphonso.jpg',
    weight: '1kg',
    origin: 'Maharashtra',
  },
  'Handpicked Himsagar': {
    description: 'Carefully handpicked',
    price: 849,
    image: 'src/images/handpicked himsagar.jpg',
    weight: '1kg',
    origin: 'West Bengal',
  },
  'Ready to Eat': {
    description: 'Fully ripe and ready',
    price: 699,
    image: 'src/images/Ready to Eat.jpg',
    weight: '1kg',
    origin: 'Mixed Regions',
  },
  'Partially Ripe': {
    description: 'Perfect for ripening at home',
    price: 649,
    image: 'src/images/Partially Ripe.jpg',
    weight: '1kg',
    origin: 'Mixed Regions',
  },
  'Green Raw': {
    description: 'Ideal for pickles',
    price: 599,
    image: 'src/images/Green Raw.jpg',
    weight: '1kg',
    origin: 'Mixed Regions',
  },
  'Gir Kesar': {
    description: 'Grown in Gir region',
    price: 899,
    image: 'src/images/Gir Kesar.jpg',
    weight: '1kg',
    origin: 'Gujarat',
  },
  Totapuri: {
    description: 'Distinctively shaped mango',
    price: 649,
    image: 'src/images/Totapuri.jpg',
    weight: '1kg',
    origin: 'South India',
  },
  'Ratnagiri Alphonso': {
    description: 'Premium Ratnagiri variety',
    price: 1099,
    image: 'src/images/Ratnagiri Alphonso.jpg',
    weight: '1kg',
    origin: 'Maharashtra',
  },
};

const categoryProducts = {
  'Seasonal Favorites': ['Langra', 'Kesar', 'Himsagar', 'Alphonso'],
  'Premium Selection': ['GI Tagged Kesar', 'Organic Alphonso', 'Handpicked Himsagar'],
  'Ripeness Ready': ['Ready to Eat', 'Partially Ripe', 'Green Raw'],
  'Regional Delight': ['Gir Kesar', 'Totapuri', 'Langra', 'Ratnagiri Alphonso']
};

const Products = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const productNames = category && category in categoryProducts
  ? categoryProducts[category as keyof typeof categoryProducts]
  : Object.keys(allProducts);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredProducts = productNames
    .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(name => ({ id: name, name, ...allProducts[name as keyof typeof allProducts] }))
    .sort((a, b) => {
      if (sortOption === 'price-low-high') return a.price - b.price;
      if (sortOption === 'price-high-low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{category || 'All'} Mangoes</h1>
      <div className="flex justify-between mb-6">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="p-2 border rounded w-1/3"
        />
        <select 
          onChange={(e) => setSortOption(e.target.value)} 
          className="p-2 border rounded"
        >
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
              <div className="mb-2">
                <p className="text-xs text-gray-500">Weight: {product.weight}</p>
                <p className="text-xs text-gray-500">Origin: {product.origin}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-orange-500">₹{product.price}</span>
                <button 
  onClick={() => addToCart({ ...product, quantity: 1 })} 
  className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition-colors text-sm"
>
  Add to Cart
</button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;