import { Link } from 'react-router-dom'
import { Wrench, Clock, Shield, Star } from 'lucide-react'

const Home = () => {
  const services = [
    {
      title: 'Engine Repair',
      description: 'Complete engine diagnostics and service',
      price: '$199',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Brake Service',
      description: 'Brake system inspection and repair',
      price: '$149',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance and tune-ups',
      price: '$99',
      icon: <Clock className="w-6 h-6" />
    },
  ]

  const testimonials = [
    {
      text: 'Excellent service, my bike runs perfectly now.',
      author: 'Mike J.',
      rating: 5
    },
    {
      text: 'Professional and affordable. Highly recommend.',
      author: 'Sarah C.',
      rating: 5
    },
    {
      text: 'Quick turnaround, quality work.',
      author: 'David W.',
      rating: 5
    },
  ]

  return (
    <div className="mobile-padding">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="minimal-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Motorcycle Repair
            </h1>
            <p className="text-xl text-muted mb-8">
              Quality repairs and maintenance for all motorcycle makes and models.
              Fast, reliable service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="simple-btn">
                Book Service
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-white">
        <div className="minimal-container">
          <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
          
          <div className="simple-grid">
            {services.map((service, index) => (
              <div key={index} className="simple-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted text-sm">{service.description}</p>
                  </div>
                  <div className="text-gray-400">
                    {service.icon}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">{service.price}</span>
                  <Link 
                    to="/booking" 
                    className="text-sm font-medium hover:text-gray-900"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className="text-sm font-medium hover:text-gray-900"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <div className="minimal-container">
          <h2 className="text-2xl font-bold text-center mb-8">What Riders Say</h2>
          
          <div className="simple-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="simple-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted mb-4 italic">"{testimonial.text}"</p>
                <p className="font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gray-900 text-white">
        <div className="minimal-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Ride?</h2>
            <p className="text-gray-300 mb-8">
              Schedule your motorcycle service today and get back on the road with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="simple-btn bg-white text-gray-900 hover:bg-gray-100">
                Book Now
              </Link>
              <a href="tel:+15551234567" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
