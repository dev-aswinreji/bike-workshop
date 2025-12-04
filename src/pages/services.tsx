import { useState } from 'react'
import { Wrench, Settings, Shield, Clock, Zap } from 'lucide-react'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'Engine Repair',
      description: 'Complete engine diagnostics and service',
      price: '$199',
      duration: '2-3 hours',
      category: 'engine',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'Brake Service',
      description: 'Brake system inspection and repair',
      price: '$149',
      duration: '1-2 hours',
      category: 'brakes',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Oil Change',
      description: 'Full synthetic oil change',
      price: '$69',
      duration: '30-45 mins',
      category: 'maintenance',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Chain Service',
      description: 'Chain cleaning and adjustment',
      price: '$49',
      duration: '30 mins',
      category: 'maintenance',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Tire Change',
      description: 'Tire replacement and balancing',
      price: '$129',
      duration: '1 hour',
      category: 'tires',
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'Electrical Repair',
      description: 'Wiring and electrical system repair',
      price: '$89',
      duration: '1-2 hours',
      category: 'electrical',
      icon: <Zap className="w-5 h-5" />
    },
  ]

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engine', label: 'Engine' },
    { id: 'brakes', label: 'Brakes' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'tires', label: 'Tires' },
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  return (
    <div className="mobile-padding">
      <section className="section-spacing">
        <div className="minimal-container">
          <h1 className="text-3xl font-bold mb-2">Our Services</h1>
          <p className="text-muted mb-8">
            Professional motorcycle repair and maintenance services.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="simple-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="simple-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted text-sm">{service.description}</p>
                  </div>
                  <div className="text-gray-400">
                    {service.icon}
                  </div>
                </div>
                
                <div className="divider" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xl">{service.price}</div>
                    <div className="text-sm text-muted">{service.duration}</div>
                  </div>
                  <button className="text-sm font-medium hover:text-gray-900">
                    Book Service →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-spacing bg-gray-50">
        <div className="minimal-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Service?</h2>
            <p className="text-muted mb-6">
              Have a special request or custom modification? Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567" 
                className="simple-btn"
              >
                Call for Quote
              </a>
              <a 
                href="mailto:custom@motofix.com" 
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
