import React from 'react';
import { Wrench, Settings, Zap } from 'lucide-react';

const Service: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "維護",
      description: "提供專業的維護服務，讓您的設備能夠長期穩定運作。"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "修理",
      description: "我們提供快速且可靠的修理服務，協助您解決各類技術問題。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "安裝",
      description: "專業的安裝服務，確保您的系統或設備能順利且安全地啟用。"
    }
  ];
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            我們的 <span className="text-gray-800">服務</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
  我們致力於提供高品質的服務，從專業技術到細節處理，確保每位客戶都能享有可靠且滿意的體驗。我們的團隊以專業與效率為核心，始終為您提供最佳的解決方案。
</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-10 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
              
              {/* Read More Button */}
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-flex items-center gap-2">
               閱讀更多
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;