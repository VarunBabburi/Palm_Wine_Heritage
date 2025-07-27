import React from 'react';
import { Phone, MapPin, Clock, Mail, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call now for immediate orders"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      action: "Message us for quick response"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Location",
      details: ["Village: Kenchenahalli", "Near Malur, Kolar District", "Karnataka - 563130"],
      action: "Visit our palm grove"
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "Business Hours",
      details: ["Tapping: 5:00 AM - 10:00 AM", "Orders: 6:00 AM - 8:00 PM", "Delivery: 7:00 AM - 7:00 PM"],
      action: "Fresh daily except Sundays"
    }
  ];

  const deliveryAreas = [
    "Malur", "Whitefield", "Hoskote", "Devanahalli",
    "Bagalur", "Kolar Road", "Chintamani Road", "Bangarpet"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the finest palm wine? Contact us for orders, visits, or any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                    ))}
                    <p className="text-sm text-green-600 font-medium mt-2">{info.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Order Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your message or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <Navigation className="h-6 w-6 mr-2" />
            Delivery Coverage Areas
          </h3>
          <p className="text-gray-600 mb-6">We deliver fresh palm wine to the following areas within 10km radius:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-green-100 to-amber-100 px-4 py-2 rounded-lg text-center">
                <span className="text-green-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
            <p className="text-amber-800">
              <strong>Note:</strong> Don't see your area? Contact us! We're expanding our delivery network and may be able to accommodate special requests.
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Need Urgent Delivery?</h3>
          <p className="text-lg mb-4">For same-day or emergency orders, call us directly</p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;