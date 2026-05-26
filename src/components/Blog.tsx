import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  eyebrow: string;
  titleItalic: string;
  titleBold: string;
  category: string;
  body: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    eyebrow: 'RODAN',
    titleBold: 'PERFORMANCE\nCYCLING™\nPROGRAMS',
    titleItalic: '',
    category: 'ABOUT',
    body: 'Cycling performance is built on precision engineering and relentless innovation. Our programs combine aerodynamic frame design, lightweight composite materials, and data-driven training protocols. Whether you are racing on the velodrome or conquering mountain passes, each component is tuned to deliver measurable gains. We partner with elite athletes and independent labs to validate every claim — because speed is earned, not assumed.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    eyebrow: 'TECHNIQUE',
    titleBold: 'DERAILLEUR\nSYSTEMS\nMASTERCLASS',
    titleItalic: '',
    category: 'MAINTENANCE',
    body: 'Understanding derailleur mechanics is the foundation of a smooth drivetrain. Front and rear derailleurs work in concert to move the chain across cassette sprockets under load, and even a half-millimetre of barrel-adjuster travel separates crisp shifts from ghost-shifting. This guide walks through limit screws, cable tension, and hanger alignment — the three variables that account for ninety percent of shifting faults. Master them and your bike will reward you with silent, instant gear changes on every climb.',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    eyebrow: 'MATERIALS',
    titleBold: 'CARBON VS\nALUMINUM\nFRAMES',
    titleItalic: '',
    category: 'GEAR GUIDE',
    body: 'Frame material shapes every ride sensation. Carbon fibre layups can be engineered to be stiff where power transfer demands it and compliant where road vibration degrades comfort, all at a weight penalty measured in grams. Aluminium alloys offer exceptional stiffness-to-cost ratios, resist impact damage more predictably, and are straightforward to repair. The right choice depends on your budget, riding style, and how long you plan to keep the bike — not on marketing claims alone.',
    image: 'https://images.unsplash.com/photo-1544191696-15693072b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="bg-white">
      {blogPosts.map((post, index) => (
        <article key={post.id} className="border-b border-gray-100 last:border-b-0">
          {/* Editorial Title Block */}
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-16 pb-10">
            <p
              className="text-6xl sm:text-7xl lg:text-8xl font-extralight italic text-gray-300 leading-none tracking-tight select-none"
              style={{ fontStyle: 'italic' }}
            >
              {post.eyebrow}
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight uppercase whitespace-pre-line pl-8 sm:pl-16 lg:pl-24 -mt-2">
              {post.titleBold}
            </h2>
          </div>

          {/* Two-column: article left, photo right */}
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pb-20 flex flex-col md:flex-row gap-0 items-start">
            {/* Left — article */}
            <div className="md:w-1/2 flex gap-6 pr-0 md:pr-12">
              <span className="text-xs font-bold text-gray-900 tracking-widest uppercase mt-1 shrink-0">
                ({post.category})
              </span>
              <div>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {post.body}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-red-600 transition-colors border-b border-gray-900 hover:border-red-600 pb-0.5"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={post.image}
                alt={post.titleBold.replace(/\n/g, ' ')}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Blog;
