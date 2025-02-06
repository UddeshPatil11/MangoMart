import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The King of Fruits: A Guide to Indian Mango Varieties',
      excerpt: 'Discover the rich diversity of Indian mangoes, from the premium Alphonso to the sweet Dasheri...',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80',
      date: 'March 15, 2024',
      author: 'Priya Sharma'
    },
    {
      id: 2,
      title: 'Mango Cultivation: From Farm to Table',
      excerpt: 'Learn about the journey of mangoes from our partner farms to your doorstep...',
      image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80',
      date: 'March 10, 2024',
      author: 'Rajesh Kumar'
    },
    {
      id: 3,
      title: 'Health Benefits of Eating Mangoes',
      excerpt: 'Explore the numerous health benefits that make mangoes a superfruit...',
      image: 'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?auto=format&fit=crop&q=80',
      date: 'March 5, 2024',
      author: 'Dr. Anjali Desai'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Mango Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-orange-500 font-semibold hover:text-orange-600">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;