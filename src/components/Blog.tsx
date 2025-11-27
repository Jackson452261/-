import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Derailleur Systems: A Complete Guide',
    excerpt: 'Master the mechanics of front and rear derailleurs, learn proper adjustment techniques, and troubleshoot common shifting issues.',
    author: 'Mike Chen',
    date: '2024-08-20',
    readTime: '8 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Bike Fit Fundamentals: Optimizing Your Riding Position',
    excerpt: 'Discover how proper bike fit can improve performance, prevent injuries, and enhance your overall cycling experience.',
    author: 'Sarah Johnson',
    date: '2024-08-18',
    readTime: '12 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Carbon vs Aluminum: Choosing the Right Frame Material',
    excerpt: 'Compare the pros and cons of different frame materials to make an informed decision for your next bike purchase.',
    author: 'David Rodriguez',
    date: '2024-08-15',
    readTime: '6 min read',
    category: 'Gear Guide',
    image: 'https://images.unsplash.com/photo-1544191696-15693072b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: '4',
    title: 'Training Zones Explained: Heart Rate vs Power',
    excerpt: 'Learn about different training zones and how to use heart rate and power data to maximize your training effectiveness.',
    author: 'Emma Thompson',
    date: '2024-08-12',
    readTime: '10 min read',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1517654443271-21d3b1c7e0c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: '5',
    title: 'Tubeless Tire Setup: Complete Installation Guide',
    excerpt: 'Step-by-step instructions for converting to tubeless tires, including sealant recommendations and troubleshooting tips.',
    author: 'Alex Kim',
    date: '2024-08-10',
    readTime: '15 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: '6',
    title: 'Nutrition Strategies for Long Distance Cycling',
    excerpt: 'Optimize your fueling strategy for endurance rides with proven nutrition techniques and product recommendations.',
    author: 'Lisa Park',
    date: '2024-08-08',
    readTime: '9 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

const Blog: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cycling Knowledge Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, maintenance guides, and performance tips to elevate your cycling experience
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts  
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Blog;
