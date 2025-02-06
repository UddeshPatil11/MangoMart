import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Delivery Areas</h2>
          <p className="text-gray-600">
            We currently deliver to all major cities in India. Delivery to remote areas may take additional time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Shipping Times</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Metro Cities: 1-2 business days</li>
            <li>Other Major Cities: 2-3 business days</li>
            <li>Remote Areas: 3-5 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Shipping Costs</h2>
          <p className="text-gray-600">
            We offer free shipping on all orders above ₹999. For orders below ₹999, a flat shipping fee of ₹99 will be charged.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
          <p className="text-gray-600">
            Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status on our website using this tracking number.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Packaging</h2>
          <p className="text-gray-600">
            All our mangoes are carefully packed in specially designed boxes to ensure they reach you in perfect condition. We use eco-friendly packaging materials that maintain the freshness of the fruit during transit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Delivery Guidelines</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Orders are delivered Monday through Saturday</li>
            <li>Standard delivery hours are between 9 AM and 7 PM</li>
            <li>You will receive a call from our delivery partner before delivery</li>
            <li>Someone must be available to receive and inspect the order</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;