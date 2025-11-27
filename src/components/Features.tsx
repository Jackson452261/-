import React from 'react';
import { Zap, Wind, Gauge, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
   {
      icon: <Zap className="w-8 h-8" />,
      title: "閃電般的速度",
      description: "先進的空氣力學車架幾何設計使阻力比傳統設計減少 15%，為你帶來競賽優勢。"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "極致空氣力學",
      description: "經風洞測試的車架搭配隱藏式走線與最佳化管型，實現最高效率。"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "精密工程",
      description: "每個零件皆以最優質材料與最先進的製造工藝精心打造。"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "毫不妥協的品質",
      description: "專為滿足職業級競賽需求而打造，同時保有長途騎乘的舒適性。"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            為冠軍而生
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            當你追求卓越時，每個細節都至關重要。我們的公路車採用最先進技術設計，
            帶來無與倫比的性能表現。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-50 group-hover:bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <div className="text-red-600 group-hover:text-red-700 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Features;