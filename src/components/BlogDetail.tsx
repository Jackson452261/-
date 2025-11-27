import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogData: { [key: string]: BlogPost } = {
  '1': {
    id: '1',
    title: 'Understanding Derailleur Systems: A Complete Guide',
    author: 'Mike Chen',
    date: '2024-08-20',
    readTime: '8 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Derailleur', 'Maintenance', 'Shifting', 'Repair'],
    content: `The derailleur system is the heart of modern bicycle shifting, allowing riders to seamlessly change gears for optimal performance across varying terrain. Whether you're climbing steep hills or sprinting on flat roads, understanding how your derailleur works is crucial for both performance and maintenance.

## What is a Derailleur?

A derailleur is a mechanical device that moves the chain from one gear to another by literally "derailing" it from one cog or chainring and guiding it onto another. The word "derailleur" comes from the French verb "dérailler," meaning "to derail."

## Types of Derailleurs

### Rear Derailleur
The rear derailleur is responsible for shifting the chain across the cassette (the cluster of gears on the rear wheel). It consists of several key components:

- **Cage**: Houses the jockey wheels and maintains chain tension
- **Jockey Wheels**: Guide the chain and maintain proper alignment
- **Parallelogram**: The linkage system that moves the derailleur laterally
- **Spring**: Provides tension to keep the chain taut

### Front Derailleur
The front derailleur shifts the chain between chainrings (the large gears attached to the pedals). Modern bikes typically have:

- **Double (2x)**: Two chainrings for road bikes
- **Triple (3x)**: Three chainrings for touring or mountain bikes
- **Single (1x)**: One chainring, increasingly popular for simplicity

## Common Problems and Solutions

### Poor Shifting Performance
**Symptoms**: Slow, hesitant, or inaccurate shifts
**Solutions**:
- Adjust cable tension using barrel adjusters
- Clean and lubricate cables
- Align derailleur hanger
- Replace worn components

### Chain Skipping
**Symptoms**: Chain jumps between gears under load
**Solutions**:
- Check chain and cassette wear
- Adjust cable tension
- Inspect and straighten derailleur cage

### Maintenance Best Practices
- Clean the derailleur after every ride in wet conditions
- Apply light oil to pivot points monthly
- Inspect weekly for damage or wear
- Professional tune-up seasonally`
  },
  '2': {
    id: '2',
    title: 'Bike Fit Fundamentals: Optimizing Your Riding Position',
    author: 'Sarah Johnson',
    date: '2024-08-18',
    readTime: '12 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Bike Fit', 'Performance', 'Ergonomics', 'Comfort'],
    content: `Proper bike fit is the foundation of cycling performance, comfort, and injury prevention. A well-fitted bike not only makes you faster and more efficient but also ensures you can ride longer without discomfort or pain.

## Why Bike Fit Matters

### Performance Benefits
- **Increased Power Output**: Optimal position maximizes muscle recruitment
- **Improved Aerodynamics**: Reduced drag for better speed
- **Enhanced Efficiency**: Less energy wasted on poor positioning
- **Better Handling**: Improved bike control and stability

### Key Measurements

### Saddle Height
The most critical measurement affecting power and comfort.
- Sit on bike with heel on pedal at bottom of stroke
- Leg should be completely straight
- When pedaling normally, maintain 25-30° knee bend

### Saddle Position (Fore/Aft)
Affects weight distribution and pedaling efficiency using the KOPS method (Knee Over Pedal Spindle).

### Handlebar Height and Reach
Determines upper body position and comfort based on flexibility, riding style, and core strength.

## Common Fit Issues

### Knee Pain
**Causes**: Incorrect saddle height, poor cleat positioning
**Solutions**: Adjust saddle height and position, optimize cleat alignment

### Lower Back Pain
**Causes**: Excessive reach to handlebars, poor core strength
**Solutions**: Raise handlebars or shorten stem, strengthen core muscles

### Professional vs DIY Fitting
Seek professional help for persistent pain, performance plateaus, or new bike purchases. DIY fitting works for basic adjustments with small, incremental changes.`
  },
  '3': {
    id: '3',
    title: 'Carbon vs Aluminum: Choosing the Right Frame Material',
    author: 'David Rodriguez',
    date: '2024-08-15',
    readTime: '6 min read',
    category: 'Gear Guide',
    image: 'https://images.unsplash.com/photo-1544191696-15693072b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Frame Materials', 'Carbon Fiber', 'Aluminum', 'Bike Selection'],
    content: `When shopping for a new bike, choosing the frame material is crucial. Carbon fiber and aluminum dominate the modern cycling market, each offering distinct advantages.

## Carbon Fiber: The High-Performance Choice

### Advantages
- **Weight Reduction**: Significantly lighter than aluminum
- **Vibration Damping**: Natural vibration absorption for comfort
- **Aerodynamic Shaping**: Complex tube shapes for efficiency
- **Customizable Stiffness**: Engineers can tune flex characteristics

### Disadvantages
- **Cost**: Significantly more expensive than aluminum
- **Durability Concerns**: Susceptible to impact damage
- **Repairability**: Difficult and expensive to repair

## Aluminum: The Versatile Workhorse

### Advantages
- **Affordability**: Less expensive with quality frames from $500-1,500
- **Durability**: Excellent fatigue resistance and impact handling
- **Repairability**: Can be welded and repaired easily
- **Power Transfer**: Very stiff for direct power transfer

### Disadvantages
- **Weight**: Heavier than carbon fiber
- **Vibration**: Transmits more road vibration
- **Limited Shaping**: Constrained by manufacturing limitations

## Performance Comparison
- **Weight**: Carbon wins (700-1,200g vs 1,200-1,800g)
- **Comfort**: Carbon superior for vibration damping
- **Durability**: Aluminum better for everyday use
- **Value**: Aluminum better for cost-conscious buyers

## Choosing the Right Material
**Choose Carbon If**: Performance is priority, racing competitively, weight savings justify cost
**Choose Aluminum If**: Budget-conscious, recreational riding, prioritize durability`
  },
  '4': {
    id: '4',
    title: 'Training Zones Explained: Heart Rate vs Power',
    author: 'Emma Thompson',
    date: '2024-08-12',
    readTime: '10 min read',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1517654443271-21d3b1c7e0c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Training', 'Heart Rate', 'Power Meter', 'Performance'],
    content: `Understanding training zones is fundamental to structured cycling training. Training zones help you target specific physiological adaptations and maximize training effectiveness.

## Heart Rate Training Zones

### Zone 1: Active Recovery (50-60% Max HR)
- Very easy, conversational pace
- Promotes blood flow and recovery
- Used for recovery rides and warm-ups

### Zone 2: Aerobic Base (60-70% Max HR)
- Comfortable, sustainable pace
- Primary fat-burning zone
- Foundation for endurance training

### Zone 3: Aerobic (70-80% Max HR)
- Moderately hard effort
- Sustainable for 1-3 hours
- Tempo rides and race pace training

### Zone 4: Lactate Threshold (80-90% Max HR)
- Hard, sustainable effort
- Maximum steady-state intensity
- Time trial and threshold training

### Zone 5: VO2 Max (90-100% Max HR)
- Very hard effort for 3-8 minutes
- Maximal oxygen uptake development
- Short, intense intervals

## Power Training Zones
Power meters provide direct measurement of work output with seven distinct zones from active recovery (<55% FTP) to neuromuscular power (>150% FTP).

## Heart Rate vs Power
**Heart Rate**: Accessible, shows physiological response, but has lag time and environmental factors
**Power**: Immediate feedback, objective measurement, but expensive and technically complex

## Determining Your Zones
Use field testing (20-minute time trial) or laboratory testing for heart rate. For power, conduct FTP testing or ramp tests to establish Functional Threshold Power.

## Training Applications
- **Base Phase**: Focus on Zones 1-2
- **Build Phase**: Emphasize Zones 3-4  
- **Peak Phase**: Target Zones 5-7
- Follow 80% easy, 20% hard polarized approach`
  },
  '5': {
    id: '5',
    title: 'Tubeless Tire Setup: Complete Installation Guide',
    author: 'Alex Kim',
    date: '2024-08-10',
    readTime: '15 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Tubeless', 'Tires', 'Maintenance', 'Setup'],
    content: `Tubeless tires offer improved puncture resistance, better traction, and lower rolling resistance. Here's your complete setup guide.

## Benefits of Tubeless
- **Puncture Resistance**: Sealant automatically fixes small holes
- **Lower Rolling Resistance**: No tube friction
- **Improved Traction**: Lower pressures increase contact patch
- **Pinch Flat Elimination**: No tube means no pinch punctures

## Required Components
- **Tubeless-Ready Rims**: Airtight rim bed with proper profile
- **Tubeless-Ready Tires**: Reinforced bead for secure seating
- **Tubeless Valves**: Presta or Schrader with removable cores
- **Sealant**: 30-60ml for road, 60-90ml for gravel, 90-120ml for mountain

## Installation Steps

### 1. Rim Preparation
- Verify tubeless-ready designation
- Install rim tape if needed with proper overlap
- Clean rim thoroughly

### 2. Valve Installation
- Create clean opening in rim tape
- Install valve with proper sealing
- Tighten securely but don't over-torque

### 3. Tire Mounting
- Mount one bead completely
- Add sealant through valve or tire cavity
- Mount second bead, leaving small section unmounted
- Inflate quickly to seat beads

### 4. Final Setup
- Check for proper bead seating
- Adjust pressure to desired level
- Spin wheel to distribute sealant
- Check for leaks and seal as needed

## Maintenance Tips
- Replace sealant every 3-6 months
- Check tire pressure regularly
- Carry tubeless repair plugs for larger punctures
- Keep spare tube for emergency repairs`
  },
  '6': {
    id: '6',
    title: 'Nutrition Strategies for Long Distance Cycling',
    author: 'Lisa Park',
    date: '2024-08-08',
    readTime: '9 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Nutrition', 'Endurance', 'Fueling', 'Performance'],
    content: `Proper nutrition is crucial for long-distance cycling performance. Strategic fueling can make the difference between a successful ride and bonking halfway through.

## Pre-Ride Nutrition

### 3-4 Hours Before
- Large meal with complex carbohydrates
- Moderate protein and minimal fat
- Examples: Oatmeal with banana, pasta with lean protein

### 1-2 Hours Before
- Light snack with easily digestible carbs
- 200-300 calories maximum
- Examples: Banana, energy bar, toast with honey

## During-Ride Fueling

### Carbohydrate Requirements
- **Short rides (<90 min)**: Water sufficient
- **Medium rides (90-150 min)**: 30-60g carbs/hour
- **Long rides (>150 min)**: 60-90g carbs/hour

### Fueling Options
- **Sports drinks**: Easy absorption, electrolytes included
- **Energy gels**: Concentrated carbs, portable
- **Solid foods**: Bananas, dates, energy bars
- **Real food**: Sandwiches, rice cakes for ultra-distance

## Hydration Strategy

### Fluid Requirements
- Start hydrated (pale yellow urine)
- Drink 150-250ml every 15-20 minutes
- Adjust for temperature and sweat rate

### Electrolyte Balance
- Sodium: 200-700mg per hour in hot conditions
- Include potassium and magnesium
- Monitor for cramping or excessive fatigue

## Post-Ride Recovery

### Immediate (0-30 minutes)
- 3:1 or 4:1 carb to protein ratio
- 0.5-1g carbs per kg body weight
- Examples: Chocolate milk, recovery drink

### Extended Recovery (30 minutes - 2 hours)
- Complete meal with quality protein
- Anti-inflammatory foods
- Rehydrate with 150% of fluid lost

## Common Mistakes
- **Waiting too long**: Start fueling early
- **New foods on race day**: Practice nutrition strategy
- **Under-hydrating**: Monitor fluid intake
- **Over-reliance on one source**: Vary fuel types`
  }
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogData[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/blog"
          className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        {/* Article Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-white/80 text-sm">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-6">{post.author}</span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-gray-700 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            
            if (paragraph.includes('**') && paragraph.includes('**:')) {
              const parts = paragraph.split('**');
              return (
                <p key={index} className="text-gray-700 mb-4">
                  <strong className="text-gray-900">{parts[1]}</strong>: {parts[2]}
                </p>
              );
            }
            
            return (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              Share Article
            </button>
            
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              More Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
