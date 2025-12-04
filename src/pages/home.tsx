import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award, Zap, CheckCircle, Star, Wrench, Cog, Settings } from 'lucide-react'

const Home = () => {
  const features = [
    { 
      icon: <Clock className="w-7 h-7" />, 
      title: '24/7 Service', 
      description: 'Emergency repairs anytime',
      stat: '1 Hour Response'
    },
    { 
      icon: <Shield className="w-7 h-7" />, 
      title: 'Lifetime Warranty', 
      description: 'All repairs backed for life',
      stat: '100% Guarantee'
    },
    { 
      icon: <Award className="w-7 h-7" />, 
      title: 'Expert Mechanics', 
      description: 'Certified motorcycle specialists',
      stat: '15+ Years Exp'
    },
    { 
      icon: <Zap className="w-7 h-7" />, 
      title: 'Mobile Service', 
      description: 'We come to you',
      stat: 'Free Pickup'
    },
  ]

  const services = [
    { 
      name: 'Engine Tune-up', 
      price: '$199', 
      duration: '2-3 Hours',
      features: ['Engine diagnostics', 'Spark plug replacement', 'Oil change', 'Fuel system cleaning'],
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Premium Service', 
      price: '$399', 
      duration: '4-6 Hours',
      features: ['Complete engine service', 'Transmission check', 'Brake system overhaul', 'Suspension tuning'],
      image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Custom Build', 
      price: 'Custom Quote', 
      duration: '1-2 Weeks',
      features: ['Custom modifications', 'Performance upgrades', 'Paint & finish', 'Complete rebuild'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    },
  ]

  const motorcycleBrands = [
    'Harley Davidson', 'Ducati', 'BMW', 'Honda', 'Yamaha', 'Kawasaki', 'Triumph', 'Indian'
  ]

  const testimonials = [
    { 
      name: 'Mike "Ironhorse" Johnson', 
      role: 'Harley Owner',
      text: 'Best repair shop in the state! My Fat Boy runs better than new.',
      bike: 'Harley Fat Boy',
      rating: 5
    },
    { 
      name: 'Sarah "Racer" Chen', 
      role: 'Track Champion',
      text: 'Precision work on my Ducati. Ready for the next track day!',
      bike: 'Ducati Panigale V4',
      rating: 5
    },
    { 
      name: 'Dave "Trailblazer" Wilson', 
      role: 'Adventure Rider',
      text: 'Fixed my BMW GS suspension perfectly. Back to the mountains!',
      bike: 'BMW R1250GS',
      rating: 5
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531048563746-ef3d0a3d8e2f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1578885137598-450e9526eed8?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1558980664-1db506751c6c?auto=format&fit=crop&w=600&q=80',
  ]

  return (
    <div className="moto-mobile-padding">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 carbon-pattern" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-gray-900/20 to-transparent rounded-full blur-3xl" />
        
        {/* Animated Engine Parts */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-orange-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-orange-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-moto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-black text-white uppercase tracking-wide">⚡ PREMIUM MOTORCYCLE SERVICE</span>
              </div>

              <h1 className="moto-heading">
                <span className="block text-white">EXPERT</span>
                <span className="block chrome-text mt-2">MOTORCYCLE</span>
                <span className="block text-orange-500 mt-2">REPAIR & SERVICE</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Precision engineering meets passion. Our certified mechanics deliver top-tier repair services 
                for all motorcycle brands. Fast, reliable, and built to perform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="btn-moto group flex items-center justify-center gap-2 touch-moto"
                >
                  <span>Schedule Service</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-bold uppercase hover:bg-orange-500/10 transition-colors touch-moto"
                >
                  Emergency Call
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { value: '10K+', label: 'Motorcycles Serviced' },
                  { value: '99.8%', label: 'Satisfaction Rate' },
                  { value: '24h', label: 'Turnaround Time' },
                  { value: '15', label: 'Expert Technicians' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-orange-500">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="card-moto overflow-hidden chrome-border-effect">
                <img 
                  src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Motorcycle Repair"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                    <h3 className="text-2xl lg:text-3xl font-black text-white">GARAGE READY</h3>
                    <div className="moto-gauge">
                      <div className="gauge-track"></div>
                      <div className="gauge-needle" style={{ transform: 'translateX(-50%) rotate(120deg)' }}></div>
                    </div>
                  </div>
                  <p className="text-gray-300">Professional service for all motorcycle brands</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-xl">
                <span className="text-sm font-black text-white uppercase">⚡ 20% Off First Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container-moto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            <span className="chrome-text">BRANDS WE SERVICE</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {motorcycleBrands.map((brand, index) => (
              <div key={index} className="card-moto p-4 text-center hover:scale-105 transition-transform">
                <div className="text-orange-500 font-bold text-sm uppercase tracking-wide">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-moto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="chrome-text">WHY RIDERS CHOOSE US</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Precision engineering meets uncompromising quality in every repair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-moto p-6 md:p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-900 border-2 border-orange-500 flex items-center justify-center mb-6">
                  <div className="text-orange-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-orange-500 font-bold">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-moto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="chrome-text">SERVICE PACKAGES</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Professional motorcycle repair services for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`card-moto overflow-hidden ${index === 1 ? 'chrome-border-effect scale-105' : ''}`}
              >
                {index === 1 && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-r-lg">
                    <span className="text-sm font-black text-white uppercase">Most Popular</span>
                  </div>
                )}
                
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 md:h-56 object-cover"
                />
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-white">{service.name}</h3>
                      <div className="text-gray-400 text-sm">{service.duration}</div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-orange-500">{service.price}</div>
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
                    className={`block w-full text-center py-3 rounded-lg font-black uppercase tracking-wide transition-colors touch-moto ${
                      index === 1
                        ? 'btn-moto'
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
        <div className="container-moto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="chrome-text">OUR GARAGE</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              State-of-the-art facility with premium equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="card-moto overflow-hidden group">
                <img 
                  src={image} 
                  alt={`Garage ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white font-bold uppercase">Motorcycle Service #{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-moto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="chrome-text">RIDER TESTIMONIALS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Hear from riders who trust us with their machines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-moto p-6 md:p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white font-black text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                    <div className="text-orange-500 text-sm font-bold">{testimonial.bike}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-moto">
          <div className="card-moto p-8 md:p-12 text-center bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 headlight-beam">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              READY TO RIDE?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Schedule your motorcycle service today and experience premium repair work.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Link
                to="/booking"
                className="btn-moto px-10 py-4 text-lg touch-moto"
              >
                Book Service Now
              </Link>
              <a
                href="tel:+15551234567"
                className="px-10 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-black uppercase tracking-wide hover:bg-orange-500/10 transition-colors touch-moto"
              >
                Emergency: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
