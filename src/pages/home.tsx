import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award, Star, Zap, CheckCircle, Bike } from 'lucide-react'

const Home = () => {
  const features = [
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: '24-Hour Service', 
      description: 'Most repairs completed within a day',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: '2-Year Warranty', 
      description: 'All repairs come with warranty',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: 'Expert Technicians', 
      description: 'Certified bike specialists',
      gradient: 'from-blue-600 to-indigo-500'
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Free Pickup', 
      description: 'We pick up and deliver your bike',
      gradient: 'from-indigo-500 to-purple-500'
    },
  ]

  const services = [
    { name: 'Basic Tune-up', price: '$49', features: ['Brake adjustment', 'Gear tuning', 'Chain lubrication'], popular: true },
    { name: 'Premium Service', price: '$99', features: ['Full cleaning', 'Wheel truing', 'Bearing check', 'Cable replacement'] },
    { name: 'Complete Overhaul', price: '$149', features: ['Full disassembly', 'Deep cleaning', 'All parts replacement', 'Professional tuning'] },
  ]

  const testimonials = [
    { name: 'Michael Chen', role: 'Professional Cyclist', text: 'Best service in town! My racing bike has never felt better.', rating: 5 },
    { name: 'Sarah Johnson', role: 'Daily Commuter', text: 'Quick, professional, and affordable. Highly recommend!', rating: 5 },
    { name: 'David Park', role: 'Mountain Biker', text: 'Fixed my suspension perfectly. Ready for the trails again!', rating: 5 },
  ]

  return (
    <div className="mobile-nav-padding">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="wave-pattern" />

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-sm font-medium text-blue-600">🚀 #1 Bike Repair Service</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Premium Bike</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Repair Services
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Experience top-tier bike repair with our certified technicians. 
                Fast, reliable, and precision service that keeps you riding smoothly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="premium-btn group flex items-center justify-center gap-2"
                >
                  Book Service Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-2xl border-2 border-blue-200 text-blue-600 font-medium hover:bg-blue-50 transition-colors touch-optimized"
                >
                  View All Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { value: '5000+', label: 'Bikes Repaired' },
                  { value: '99%', label: 'Satisfaction' },
                  { value: '24h', label: 'Avg. Turnaround' },
                  { value: '15', label: 'Min Response' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="premium-card p-8">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Bike className="w-20 h-20 mx-auto mb-4 animate-float" />
                      <h3 className="text-2xl font-bold">Ready to Ride</h3>
                      <p className="text-blue-100">Book your service today!</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 premium-badge">
                  <Zap className="w-4 h-4" />
                  15% Off First Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-blue-600">Premium Service</span>
            </h2>
            <p className="text-lg text-gray-600">
              We combine expertise with cutting-edge technology for the best bike repair experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="premium-card p-6 group hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-600">Service Packages</span>
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of professional bike repair services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`premium-card p-8 relative ${service.popular ? 'border-gradient scale-105' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 premium-badge">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all touch-optimized ${
                    service.popular
                      ? 'premium-btn'
                      : 'border-2 border-blue-200 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Select Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied cyclists who trust us with their bikes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="premium-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-premium">
          <div className="premium-card p-8 md:p-12 text-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ride Smoothly Again?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your bike repair service today and get back on the road with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-colors touch-optimized"
              >
                Book Now - 15% Off
              </Link>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-colors touch-optimized"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
