import { useState } from 'react'
import { Wrench, Cog, Settings, Zap, Shield, Clock } from 'lucide-react'
import ServiceCard from '../components/serviceCard'
import type { Service } from '../types'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services: Service[] = [
    {
      id: 1,
      name: 'Engine Tune-up',
      description: 'Complete engine diagnostics and service',
      price: '$199',
      duration: '2-3 Hours',
      features: ['Engine diagnostics', 'Spark plug replacement', 'Oil change', 'Fuel system cleaning'],
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 2,
      name: 'Brake System Service',
      description: 'Complete brake system overhaul',
      price: '$149',
      duration: '2-3 Hours',
      features: ['Brake pad replacement', 'Brake fluid flush', 'Rotor inspection', 'Caliper service'],
      image: 'https://images.unsplash.com/photo-1558980664-1db506751c6c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Transmission Service',
      description: 'Transmission diagnostics and repair',
      price: '$249',
      duration: '3-4 Hours',
      features: ['Transmission fluid change', 'Clutch replacement', 'Gear inspection', 'Seal replacement'],
      image: 'https://images.unsplash.com/photo-1578885137598-450e9526eed8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Suspension Tuning',
      description: 'Custom suspension setup and tuning',
      price: '$179',
      duration: '2-3 Hours',
      features: ['Fork service', 'Shock rebuild', 'Spring rate adjustment', 'Sag setup'],
      image: 'https://images.unsplash.com/photo-1531048563746-ef3d0a3d8e2f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Electrical System',
      description: 'Complete electrical diagnostics and repair',
      price: '$129',
      duration: '2-3 Hours',
      features: ['Battery service', 'Wiring repair', 'Lighting upgrades', 'ECU diagnostics'],
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Custom Build Service',
      description: 'Custom motorcycle build and modifications',
      price: 'Custom Quote',
      duration: '1-2 Weeks',
      features: ['Custom fabrication', 'Performance upgrades', 'Paint & finish', 'Complete assembly'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    },
  ]

  const categories = [
    { id: 'all', label: 'All Services', icon: <Wrench className="w-5 h-5" /> },
    { id: 'engine', label: 'Engine', icon: <Cog className="w-5 h-5" /> },
    { id: 'brakes', label: 'Brakes', icon: <Shield className="w-5 h-5" /> },
    { id: 'transmission', label: 'Transmission', icon: <Settings className="w-5 h-5" /> },
    { id: 'suspension', label: 'Suspension', icon: <Zap className="w-5 h-5" /> },
    { id: 'electrical', label: 'Electrical', icon: <Clock className="w-5 h-5" /> },
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.name.toLowerCase().includes(selectedCategory))

  return (
    <div className="moto-mobile-padding">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 carbon-pattern" />
        <div className="container-moto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="moto-heading mb-6">
              <span className="chrome-text">PROFESSIONAL</span>
              <span className="block text-orange-500">MOTORCYCLE SERVICES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive repair and maintenance services for all motorcycle makes and models.
              Our certified technicians use state-of-the-art equipment to ensure your ride performs at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-moto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-bold uppercase tracking-wide transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                    : 'bg-gray-900 text-gray-300 hover:text-orange-500'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} index={service.id} />
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-moto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            <span className="chrome-text">ADDITIONAL SERVICES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tire Service', price: '$99', description: 'Tire change and balancing' },
              { title: 'Chain Service', price: '$79', description: 'Chain cleaning and adjustment' },
              { title: 'Oil Change', price: '$69', description: 'Full synthetic oil change' },
              { title: 'Safety Inspection', price: '$49', description: 'Complete safety check' },
            ].map((service, index) => (
              <div key={index} className="card-moto p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-orange-500 text-2xl font-black mb-3">{service.price}</div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <button className="w-full py-2 border border-orange-500 text-orange-500 rounded-lg font-bold hover:bg-orange-500/10 transition-colors">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-moto">
          <div className="card-moto p-8 md:p-12 text-center bg-gradient-to-br from-gray-900 to-black">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              NEED CUSTOM SERVICE?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a special request or custom modification in mind? Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="btn-moto touch-moto"
              >
                Call for Quote
              </a>
              <a
                href="mailto:custom@motorepair.pro"
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-bold uppercase tracking-wide hover:bg-orange-500/10 transition-colors touch-moto"
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
