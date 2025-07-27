import React from 'react';
import { Camera, Award, Users, Droplets } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Traditional palm wine tapping",
      caption: "Master tapper at work"
    },
    {
      src: "https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Palm trees",
      caption: "Our palm grove"
    },
    {
      src: "https://images.pexels.com/photos/1238551/pexels-photo-1238551.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh palm wine",
      caption: "Fresh morning collection"
    },
    {
      src: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Palm wine containers",
      caption: "Quality storage containers"
    },
    {
      src: "https://images.pexels.com/photos/1693651/pexels-photo-1693651.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Aged palm wine",
      caption: "Perfectly aged varieties"
    },
    {
      src: "https://images.pexels.com/photos/4022141/pexels-photo-4022141.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Family tradition",
      caption: "Three generations of expertise"
    }
  ];

  const stats = [
    { icon: <Award className="h-8 w-8 text-amber-500" />, number: "25+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8 text-green-500" />, number: "1000+", label: "Happy Customers" },
    { icon: <Droplets className="h-8 w-8 text-blue-500" />, number: "50+", label: "Liters Daily" },
    { icon: <Camera className="h-8 w-8 text-purple-500" />, number: "10km", label: "Delivery Radius" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our traditional palm wine production process and see the dedication behind every drop
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-green-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see our process in person? Visit us during tapping hours (5 AM - 10 AM)</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Visit Our Farm
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;