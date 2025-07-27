import React from 'react';
import { ChevronDown, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Palm trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-amber-900/50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Premium <span className="text-amber-300">Palm Wine</span>
          <br />
          From Traditional Tappers
        </h1>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the finest quality palm wine, freshly tapped using time-honored techniques passed down through generations
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
          <div className="flex items-center space-x-2 text-white">
            <Award className="h-5 w-5 text-amber-300" />
            <span className="text-lg">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Users className="h-5 w-5 text-amber-300" />
            <span className="text-lg">Local Fame</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Clock className="h-5 w-5 text-amber-300" />
            <span className="text-lg">Fresh Daily</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <a
            href="#order"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Order Now
          </a>
          <a
            href="#about"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;