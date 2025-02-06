import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">About MangoMart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2024, MangoMart was born from a passion for bringing India's finest mangoes 
            directly to consumers. We work closely with select farmers who maintain the highest 
            standards of mango cultivation, ensuring that only the best fruits reach your table.
          </p>
          <p className="text-gray-600">
            Our mission is to make premium quality mangoes accessible to everyone while supporting 
            sustainable farming practices and ensuring fair compensation for our farmer partners.
          </p>
        </div>
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80"
            alt="Mango farm"
            className="rounded-lg shadow-md w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
            <p className="text-gray-600">
              We source only the finest mangoes from certified farms, ensuring premium quality 
              and taste in every fruit.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Direct from Farms</h3>
            <p className="text-gray-600">
              By working directly with farmers, we ensure freshness and support local 
              agricultural communities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure Packaging</h3>
            <p className="text-gray-600">
              Our specially designed packaging ensures your mangoes arrive in perfect condition, 
              ready to enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;