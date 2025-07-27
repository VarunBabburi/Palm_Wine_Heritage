import React from 'react';
import { Leaf, Phone, MapPin, Clock, Star, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Products", href: "#products" },
      { name: "Order Now", href: "#order" }
    ],
    "Products": [
      { name: "Fresh Palm Wine", href: "#products" },
      { name: "Aged Palm Wine", href: "#products" },
      { name: "Special Blend", href: "#products" },
      { name: "Bulk Orders", href: "#contact" }
    ],
    "Contact": [
      { name: "+91 98765 43210", href: "tel:+919876543210", icon: <Phone className="h-4 w-4" /> },
      { name: "Kenchenahalli, Malur", href: "#contact", icon: <MapPin className="h-4 w-4" /> },
      { name: "5 AM - 8 PM Daily", href: "#contact", icon: <Clock className="h-4 w-4" /> }
    ]
  };

  return (
    <footer className="bg-gradient-to-r from-green-800 to-amber-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-xl font-bold">Palm Wine Heritage</span>
            </div>
            <p className="text-green-100 mb-4 leading-relaxed">
              Preserving traditional palm wine making techniques while delivering premium quality to your doorstep.
            </p>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 text-amber-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-green-100">25+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-amber-200">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-green-100 hover:text-amber-200 transition-colors duration-200 flex items-center space-x-2"
                    >
                      {link.icon && link.icon}
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Delivery Information */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-green-700/50 rounded-lg p-6">
              <h4 className="font-semibold text-amber-200 mb-2">Free Delivery</h4>
              <p className="text-green-100 text-sm">Within 10km radius</p>
            </div>
            <div className="bg-green-700/50 rounded-lg p-6">
              <h4 className="font-semibold text-amber-200 mb-2">Fresh Daily</h4>
              <p className="text-green-100 text-sm">Tapped every morning</p>
            </div>
            <div className="bg-green-700/50 rounded-lg p-6">
              <h4 className="font-semibold text-amber-200 mb-2">Quality Assured</h4>
              <p className="text-green-100 text-sm">Premium taste guaranteed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-100 text-sm mb-4 md:mb-0">
            <p>© {currentYear} Palm Wine Heritage. All rights reserved.</p>
            <p className="mt-1">Proudly serving traditional palm wine since 1999</p>
          </div>
          
          <div className="flex items-center space-x-4 text-green-100">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span className="text-sm">for palm wine lovers</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">Ready to taste authentic palm wine?</h3>
          <p className="text-amber-100 mb-4">Join hundreds of satisfied customers in the region</p>
          <a
            href="#order"
            className="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;