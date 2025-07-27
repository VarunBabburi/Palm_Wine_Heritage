import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Malur Town",
      rating: 5,
      text: "Best palm wine in the entire district! I've been ordering for 3 years now. The quality is consistently excellent and the taste is authentic.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Devi",
      location: "Whitefield",
      rating: 5,
      text: "My family has been customers for over 5 years. The fresh palm wine is perfect for our traditional celebrations. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Venkatesh Reddy",
      location: "Hoskote",
      rating: 5,
      text: "Exceptional quality and timely delivery. The aged variety has the perfect balance of sweetness and strength. Worth every rupee!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lakshmi Amma",
      location: "Kolar Road",
      rating: 5,
      text: "Traditional taste just like my grandmother used to make. The special blend is my favorite. Thank you for preserving this heritage!",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Suresh Babu",
      location: "Devanahalli",
      rating: 5,
      text: "Professional service and pure quality. I order 10 liters every week for my restaurant. Customers love the authentic taste!",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Meera Sharma",
      location: "Bagalur",
      rating: 5,
      text: "Clean, hygienic, and delicious! The delivery is always on time and the packaging is excellent. My go-to supplier for all occasions.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across the region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute top-4 right-4 text-green-200">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Customers!</h3>
            <p className="text-lg mb-6">
              Experience the finest palm wine in the region. Order now and taste the difference quality makes.
            </p>
            <a
              href="#order"
              className="inline-flex items-center bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Place Your First Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;