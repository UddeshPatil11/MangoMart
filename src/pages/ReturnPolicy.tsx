import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Return Policy</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Quality Guarantee</h2>
          <p className="text-gray-600">
            We take pride in delivering only the highest quality mangoes. If you're not satisfied with the quality of the mangoes received, please contact us within 24 hours of delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Return Process</h2>
          <ol className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>Contact our customer service within 24 hours of delivery</li>
            <li>Share photos of the received products</li>
            <li>Our quality team will assess the issue</li>
            <li>If approved, we'll arrange for return pickup</li>
            <li>Refund will be processed within 5-7 business days</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Refund Policy</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Full refund for damaged or poor quality products</li>
            <li>Refund will be processed to the original payment method</li>
            <li>Processing time: 5-7 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Non-Returnable Cases</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Returns requested after 24 hours of delivery</li>
            <li>Products that have been consumed</li>
            <li>Damage due to improper storage after delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For any queries regarding returns or refunds, please contact our customer service:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-2">
            <li>Email: returns@mangomart.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Available Monday to Saturday, 9 AM to 6 PM</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;