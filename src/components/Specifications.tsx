import React from 'react';

const Specifications: React.FC = () => {
  const specs = [
    { label: "Frame Material", value: "High-Modulus Carbon Fiber" },
    { label: "Weight", value: "6.8 kg (14.9 lbs)" },
    { label: "Drivetrain", value: "Shimano Ultegra Di2 22-Speed" },
    { label: "Brakes", value: "Hydraulic Disc Brakes" },
    { label: "Wheels", value: "Carbon Aero Wheelset" },
    { label: "Tires", value: "Continental GP5000 25mm" },
    { label: "Handlebars", value: "Integrated Carbon Aero Bars" },
    { label: "Saddle", value: "Ergonomic Performance Saddle" }
  ];

  const sizes = [
    { size: "XS", height: "5'0\" - 5'3\"", color: "48cm" },
    { size: "S", height: "5'3\" - 5'6\"", color: "52cm" },
    { size: "M", height: "5'6\" - 5'9\"", color: "56cm" },
    { size: "L", height: "5'9\" - 6'1\"", color: "58cm" },
    { size: "XL", height: "6'1\" - 6'4\"", color: "61cm" }
  ];

  return (
    <section id="specs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered components work in perfect harmony to deliver 
            an unparalleled riding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Component Specifications</h3>
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600 font-medium">{spec.label}</span>
                  <span className="text-gray-900 font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Frame Sizing</h3>
            <div className="space-y-4">
              {sizes.map((size, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {size.size}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{size.height}</div>
                      <div className="text-gray-600 text-sm">{size.color} frame</div>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Configure your dream bike with our online customization tool and get it delivered 
            to your door in just 14 days.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 hover:scale-105 transform">
            Start Building Your Bike
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specifications;