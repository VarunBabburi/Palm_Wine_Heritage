import React from 'react';
import { Droplets, Star, Clock, Thermometer } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Fresh Palm Wine",
      price: "₹150",
      unit: "per liter",
      description: "Freshly tapped palm wine with natural sweetness and mild alcohol content",
      features: ["Sweet taste", "2-3% alcohol", "Fresh daily", "Natural"],
      image: "https://images.pexels.com/photos/1238551/pexels-photo-1238551.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true
    },
    {
      name: "Aged Palm Wine",
      price: "₹200",
      unit: "per liter",
      description: "Naturally fermented palm wine with enhanced flavor and higher alcohol content",
      features: ["Rich flavor", "5-7% alcohol", "2-3 days aged", "Premium"],
      image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: false
    },
    {
      name: "Special Blend",
      price: "₹250",
      unit: "per liter",
      description: "Our signature blend combining fresh and aged palm wine for unique taste",
      features: ["Balanced taste", "4-5% alcohol", "Special recipe", "Limited"],
      image: "https://images.pexels.com/photos/1693651/pexels-photo-1693651.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: false
    }
  ];

  const icons = {
    "Sweet taste": <Droplets className="h-4 w-4 text-blue-500" />,
    "Rich flavor": <Star className="h-4 w-4 text-amber-500" />,
    "Balanced taste": <Thermometer className="h-4 w-4 text-green-500" />,
    "Fresh daily": <Clock className="h-4 w-4 text-green-500" />,
    "2-3 days aged": <Clock className="h-4 w-4 text-amber-500" />,
    "Special recipe": <Star className="h-4 w-4 text-purple-500" />
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Premium Selection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted varieties of palm wine, each with its unique character
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {product.popular && (
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-green-800 font-bold text-lg">{product.price}</span>
                  <span className="text-gray-600 text-sm">/{product.unit.split(' ')[1]}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      {icons[feature] || <Star className="h-4 w-4 text-gray-400" />}
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-amber-600 text-white py-3 rounded-full font-semibold hover:from-green-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  Select This Option
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All prices include delivery within 10km radius</p>
          <a
            href="#order"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Place Your Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;