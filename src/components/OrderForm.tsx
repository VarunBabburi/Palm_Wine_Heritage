import React, { useState } from 'react';
import { ShoppingCart, MapPin, Phone, User, Calendar, Truck } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryDate: '',
    freshWine: 0,
    agedWine: 0,
    specialBlend: 0,
    notes: ''
  });

  const products = {
    freshWine: { name: 'Fresh Palm Wine', price: 150 },
    agedWine: { name: 'Aged Palm Wine', price: 200 },
    specialBlend: { name: 'Special Blend', price: 250 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Wine') || name.includes('Blend') ? Math.max(0, parseInt(value) || 0) : value
    }));
  };

  const calculateTotal = () => {
    return (
      formData.freshWine * products.freshWine.price +
      formData.agedWine * products.agedWine.price +
      formData.specialBlend * products.specialBlend.price
    );
  };

  const getTotalLiters = () => {
    return formData.freshWine + formData.agedWine + formData.specialBlend;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculateTotal();
    const totalLiters = getTotalLiters();
    
    if (totalLiters === 0) {
      alert('Please select at least one product');
      return;
    }

    const orderSummary = `New Palm Wine Order:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Delivery Date: ${formData.deliveryDate}

Order Details:
${formData.freshWine > 0 ? `Fresh Palm Wine: ${formData.freshWine}L (₹${formData.freshWine * products.freshWine.price})` : ''}
${formData.agedWine > 0 ? `Aged Palm Wine: ${formData.agedWine}L (₹${formData.agedWine * products.agedWine.price})` : ''}
${formData.specialBlend > 0 ? `Special Blend: ${formData.specialBlend}L (₹${formData.specialBlend * products.specialBlend.price})` : ''}

Total: ₹${total}
Notes: ${formData.notes}`;

    // In a real application, this would send to a backend
    alert('Order received! We will contact you shortly to confirm delivery details.');
    console.log(orderSummary);
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Place Your Order</h2>
          <p className="text-xl text-gray-600">
            Fresh palm wine delivered to your doorstep within 10km radius
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-green-800 font-semibold mb-2">
                  <User className="h-5 w-5 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="flex items-center text-green-800 font-semibold mb-2">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-green-800 font-semibold mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter complete address"
                />
              </div>
              
              <div>
                <label className="flex items-center text-green-800 font-semibold mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  Preferred Delivery Date *
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <ShoppingCart className="h-6 w-6 mr-2" />
                Select Products
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(products).map(([key, product]) => (
                  <div key={key} className="border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">{product.name}</h4>
                    <p className="text-2xl font-bold text-amber-600 mb-3">₹{product.price}/L</p>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          [key]: Math.max(0, prev[key as keyof typeof prev] as number - 1)
                        }))}
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full font-bold hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        name={key}
                        value={formData[key as keyof typeof formData]}
                        onChange={handleInputChange}
                        min="0"
                        className="w-16 text-center border border-green-200 rounded px-2 py-1"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          [key]: (prev[key as keyof typeof prev] as number) + 1
                        }))}
                        className="bg-green-600 text-white w-8 h-8 rounded-full font-bold hover:bg-green-700 transition-colors"
                      >
                        +
                      </button>
                      <span className="text-sm text-gray-600">liters</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Notes */}
            <div>
              <label className="text-green-800 font-semibold mb-2 block">
                Special Instructions (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Any special instructions for delivery or preparation..."
              />
            </div>

            {/* Order Summary */}
            {getTotalLiters() > 0 && (
              <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Order Summary
                </h3>
                <div className="space-y-2">
                  {formData.freshWine > 0 && (
                    <div className="flex justify-between">
                      <span>Fresh Palm Wine ({formData.freshWine}L)</span>
                      <span>₹{formData.freshWine * products.freshWine.price}</span>
                    </div>
                  )}
                  {formData.agedWine > 0 && (
                    <div className="flex justify-between">
                      <span>Aged Palm Wine ({formData.agedWine}L)</span>
                      <span>₹{formData.agedWine * products.agedWine.price}</span>
                    </div>
                  )}
                  {formData.specialBlend > 0 && (
                    <div className="flex justify-between">
                      <span>Special Blend ({formData.specialBlend}L)</span>
                      <span>₹{formData.specialBlend * products.specialBlend.price}</span>
                    </div>
                  )}
                  <div className="border-t border-white/30 pt-2 mt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total ({getTotalLiters()}L)</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-full text-xl font-bold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Place Order (₹{calculateTotal()})
            </button>
          </form>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p className="mb-2">📞 For immediate orders, call us directly</p>
          <p>🚚 Free delivery within 10km • Cash on delivery available</p>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;