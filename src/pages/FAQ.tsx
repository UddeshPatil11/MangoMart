import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How do you ensure mango quality?',
      answer:
        'We work directly with certified farmers and conduct rigorous quality checks. Each mango is carefully selected and packed to ensure it reaches you in perfect condition.',
    },
    {
      question: 'What is the delivery timeline?',
      answer:
        'We deliver within 1-2 business days in metro cities and 2-3 business days in other major cities. Remote areas may take 3-5 business days.',
    },
    {
      question: 'Do you offer bulk orders?',
      answer:
        'Yes, we offer bulk ordering options for businesses and events. Please visit our Bulk Booking page for more information.',
    },
    {
      question: 'How are the mangoes packaged?',
      answer:
        'We use specially designed boxes with protective padding to prevent damage during transit. Our packaging ensures the mangoes remain fresh and intact.',
    },
    {
      question: 'What if I receive damaged mangoes?',
      answer:
        'If you receive damaged mangoes, please contact us within 24 hours of delivery with photos. We will arrange for a replacement or refund.',
    },
    {
      question: 'Which payment methods do you accept?',
      answer:
        'We accept all major credit/debit cards, UPI, net banking, and popular digital wallets.',
    },
    {
      question: 'Can I track my order?',
      answer:
        'Yes, you will receive a tracking number via email and SMS once your order is shipped. You can track your order status on our website.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Currently, we only deliver within India. We are working on expanding our services internationally.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-orange-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          We're here to help! Contact our customer support team through any of these channels:
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>Email: support@mangomart.com</li>
          <li>Phone: +91 123 456 7890</li>
          <li>WhatsApp: +91 987 654 3210</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
