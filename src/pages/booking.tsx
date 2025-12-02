import React, { useState } from 'react';
import type { BookingForm } from '../types';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    bikeType: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Booking submitted successfully! We will contact you soon to confirm.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        bikeType: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        description: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to schedule your bike repair service
          </p>
        </div>
        
        {submitMessage && (
          <div className="alert alert-success mb-6">
            <div>
              <span>{submitMessage}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card bg-base-200 shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                required
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Phone *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered"
                required
                placeholder="(555) 123-4567"
              />
            </div>
            
            {/* Bike Information */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Bike Type *</span>
              </label>
              <select
                name="bikeType"
                value={formData.bikeType}
                onChange={handleChange}
                className="select select-bordered"
                required
              >
                <option value="">Select Bike Type</option>
                <option value="road">Road Bike</option>
                <option value="mountain">Mountain Bike</option>
                <option value="hybrid">Hybrid Bike</option>
                <option value="electric">Electric Bike</option>
                <option value="bmx">BMX</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Service Type *</span>
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="select select-bordered"
                required
              >
                <option value="">Select Service</option>
                <option value="basic-tuneup">Basic Tune-up</option>
                <option value="premium-tuneup">Premium Tune-up</option>
                <option value="overhaul">Overhaul Service</option>
                <option value="flat-tire">Flat Tire Repair</option>
                <option value="brakes">Brake Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Scheduling */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Preferred Date *</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="input input-bordered"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Preferred Time *</span>
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="select select-bordered"
                required
              >
                <option value="">Select Time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 7PM)</option>
              </select>
            </div>
          </div>
          
          {/* Description */}
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text font-semibold">Additional Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered h-32"
              placeholder="Describe any specific issues, concerns, or special requests..."
            />
          </div>
          
          {/* Submit Button */}
          <div className="form-control mt-8">
            <button 
              type="submit" 
              className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
