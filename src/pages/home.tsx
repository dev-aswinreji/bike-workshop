import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award, Zap, CheckCircle, Star } from 'lucide-react'

const Home = () => {
  const features = [
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: '24-Hour Service', 
      description: 'Emergency repairs done within hours',
      accent: 'border-orange-500'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Lifetime Warranty', 
      description: 'All repairs backed for life',
      accent: 'border-orange-600'
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: 'Expert Mechanics', 
      description: 'Certified bike specialists',
      accent: 'border-orange-700'
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Free Pickup', 
      description: 'We collect & deliver your bike',
      accent: 'border-orange-500'
    },
  ]

  const services = [
    { 
      name: 'Basic Tune-up', 
      price: '$49', 
      features: ['Brake adjustment', 'Gear tuning', 'Chain lubrication'], 
      popular: true,
      image: 'https://images.unsplash.com/photo-1511994717241-8e4e484dfa8f?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Premium Service', 
      price: '$99', 
      features: ['Full cleaning', 'Wheel truing', 'Bearing check', 'Cable replacement'],
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Complete Overhaul', 
      price: '$149', 
      features: ['Full disassembly', 'Deep cleaning', 'All parts replacement', 'Pro tuning'],
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80'
    },
  ]

  const testimonials = [
    { name: 'Mike "Harley" Johnson', role: 'Professional Rider', text: 'Best damn repair shop in town! My chopper has never run better.', rating: 5, bike: 'Harley Davidson' },
    { name: 'Sarah "Racer" Chen', role: 'Track Champion', text: 'Precision work on my racing bike. Ready for the next competition!', rating: 5, bike: 'Ducati Panigale' },
    { name: 'Dave "Trailblazer" Wilson', role: 'Mountain Biker', text: 'Fixed my suspension and brakes perfectly. Back to the trails!', rating: 5, bike: 'Specialized' },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531048563746-ef3d0a3d8e2f?auto=format&fit=crop&w=800&q=80',
  ]

  return (
    <div className="mobile-section-padding">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 engine-pattern">
        {/* Chrome Background Elements */}
        <div className="absolute inset-0 leather-texture" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-gray-900/20 to-transparent rounded-full blur-3xl" />
        
        {/* Engine Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-20 h-20 border-2 border-orange-500/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-orange-500/30 rounded-full"></div>
        </div>

        <div className="container-biker relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500">
                <span className="text-sm font-black text-white uppercase tracking-wide">⚡ PREMIUM SERVICE</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="block text-white header-3d">EXPERT BIKE</span>
                <span className="block chrome-text mt-2">REPAIR & SERVICE</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Where precision meets passion. Our certified mechanics deliver top-tier repair services 
                for all bike types. Fast, reliable, and built to last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="btn-biker group flex items-center justify-center gap-2"
                >
                  <span>Schedule Service</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 rounded-md border-2 border-orange-500 text-orange-500 font-bold uppercase hover:bg-orange-500/10 transition-colors touch-biker"
                >
                  Call Now
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { value: '10K+', label: 'Bikes Serviced' },
                  { value: '99.8%', label: 'Satisfaction' },
                  { value: '24h', label: 'Turnaround' },
                  { value: '15', label: 'Expert Techs' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-orange-500">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="card-biker overflow-hidden chrome-border">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Bike Repair"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-black text-white">GARAGE READY</h3>
                    <div className="gauge">
                      <div className="gauge-fill"></div>
                    </div>
                  </div>
                  <p className="text-gray-300">Professional service for your ride</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg">
                <span className="text-sm font-black text-white uppercase">⚡ 20% Off First Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-biker">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="chrome-text">WHY RIDERS CHOOSE US</span>
            </h2>
            <p className="text-lg text-gray-400">
              Precision engineering meets uncompromising quality in every repair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`card-biker p-6 border-t-4 ${feature.accent} group`}
              >
                <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-4 group-hover:border-orange-500 transition-colors">
                  <div className="text-orange-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-biker">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="chrome-text">SERVICE PACKAGES</span>
            </h2>
            <p className="text-lg text-gray-400">
              Choose from our range of professional bike repair services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`card-biker overflow-hidden ${service.popular ? 'chrome-border' : ''}`}
              >
                {service.popular && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-r-lg">
                    <span className="text-sm font-black text-white uppercase">Most Popular</span>
                  </div>
                )}
                
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-black text-white">{service.name}</h3>
                    <div className="text-3xl font-black text-orange-500">{service.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`block w-full text-center py-3 rounded-md font-black uppercase tracking-wide transition-colors touch-biker ${
                      service.popular
                        ? 'btn-biker'
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10'
                    }`}
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-biker">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="chrome-text">OUR GARAGE</span>
            </h2>
            <p className="text-lg text-gray-400">
              See where the magic happens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="card-biker overflow-hidden">
                <img 
                  src={image} 
                  alt={`Garage ${index + 1}`}
                  className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-biker">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="chrome-text">RIDER TESTIMONIALS</span>
            </h2>
            <p className="text-lg text-gray-400">
              Hear from riders who trust us with their machines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-biker p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white font-black">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-orange-500">{testimonial.bike}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-biker">
          <div className="card-biker p-8 md:p-12 text-center bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              READY TO HIT THE ROAD?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule your service today and experience premium bike repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-md font-black uppercase tracking-wide hover:shadow-orange transition-shadow touch-biker"
              >
                Book Service Now
              </Link>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-md font-black uppercase tracking-wide hover:bg-orange-500/10 transition-colors touch-biker"
              >
                Emergency Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
