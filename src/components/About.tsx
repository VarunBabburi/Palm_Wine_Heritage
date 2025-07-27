import React from 'react';
import { Leaf, Award, Heart, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Traditional Methods",
      description: "Using age-old techniques passed down through generations for authentic taste"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Premium Quality",
      description: "Known throughout the region for exceptional quality and purity"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Family Heritage",
      description: "A proud family tradition of toddy tapping with decades of experience"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community Trust",
      description: "Trusted by locals and celebrated for consistent excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">About Our Heritage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our premium palm wine, crafted with passion and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="C:\Users\Bhargavi\Downloads\Toddy00_crop.jpg"
              alt="Traditional toddy tapping"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-amber-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">25+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-6">Master Toddy Tapper</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our family has been perfecting the art of palm wine extraction for over two decades. 
              What started as a traditional practice has evolved into a renowned business, famous 
              throughout the surrounding areas for producing the finest quality palm wine.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Using sustainable harvesting methods and maintaining the highest standards of hygiene, 
              we ensure every drop of palm wine delivers the authentic taste and quality that has 
              made us a household name in the region.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-gray-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;