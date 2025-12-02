import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name: "Basic Tune-up",
      description: "Perfect for regular maintenance and keeping your bike in good shape",
      price: "$49.99",
      duration: "1-2 hours",
      features: ["Brake adjustment", "Gear tuning", "Tire inflation", "Chain lubrication", "Safety check"]
    },
    {
      id: 2,
      name: "Premium Tune-up",
      description: "Comprehensive service for optimal performance and longevity",
      price: "$89.99",
      duration: "2-3 hours",
      features: ["Full brake service", "Complete gear adjustment", "Wheel truing", "Bearing check", "Full cleaning", "Cable adjustment"]
    },
    {
      id: 3,
      name: "Overhaul Service",
      description: "Complete bike restoration - like new condition guaranteed",
      price: "$149.99",
      duration: "4-6 hours",
      features: ["Complete disassembly", "Deep cleaning", "All bearing replacement", "New cables and housing", "Frame inspection", "Complete reassembly"]
    }
  ];

  const additionalServices = [
    { name: "Flat Tire Repair", price: "$15.99", duration: "30 min" },
    { name: "Brake Pad Replacement", price: "$25.99", duration: "45 min" },
    { name: "Chain Replacement", price: "$35.99", duration: "1 hour" },
    { name: "Wheel Truing", price: "$20.99", duration: "45 min" },
    { name: "Gear Adjustment", price: "$18.99", duration: "30 min" },
    { name: "Full Cleaning", price: "$29.99", duration: "1 hour" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional bike repair services to keep you riding smoothly. From basic tune-ups to complete overhauls.
        </p>
      </div>
      
      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div key={service.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <div className="flex justify-between items-start mb-4">
                <h2 className="card-title text-2xl">{service.name}</h2>
                <div className="badge badge-primary badge-lg">{service.price}</div>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="badge badge-outline mb-4">{service.duration}</div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-lg">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-success mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-actions justify-end">
                <Link to="/booking" className="btn btn-primary w-full">Book This Service</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-base-200 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h3 className="card-title text-lg">{service.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
