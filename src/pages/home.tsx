import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { emoji: '⚡', value: '24h', label: 'Avg Repair', color: 'text-[--theme-primary]' },
    { emoji: '⭐', value: '4.9/5', label: 'Rating', color: 'text-[--theme-accent]' },
    { emoji: '🛡️', value: '2 Years', label: 'Warranty', color: 'text-[--theme-secondary]' },
    { emoji: '🚴', value: '5000+', label: 'Bikes Fixed', color: 'text-[--theme-info]' },
  ]

  const services = [
    { name: 'Basic Tune-up', price: '$49', gradient: 'from-[--theme-primary] to-[--theme-secondary]', time: '1-2h' },
    { name: 'Premium Service', price: '$99', gradient: 'from-[--theme-secondary] to-[--theme-accent]', time: '2-3h' },
    { name: 'Full Overhaul', price: '$149', gradient: 'from-[--theme-accent] to-[--theme-primary]', time: '4-6h' },
  ]

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[90svh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-electric" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531048563746-ef3d0a3d8e2f?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)] animate-float" />
        <div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[color-mix(in_srgb,var(--theme-secondary)_20%,transparent)] animate-float" 
          style={{ animationDelay: '1s' }} 
        />

        <div className="relative z-10 container-mobile text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[color-mix(in_srgb,var(--theme-base)_10%,transparent)] backdrop-blur-sm rounded-full px-4 py-2">
            <span className="emoji-icon">✨</span>
            <span className="text-sm font-semibold text-white">#1 Bike Repair Service</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Bike Repair</span>
            <span className="text-white block mt-2">That Shines!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[color-mix(in_srgb,white_90%,transparent)] mb-8 max-w-2xl mx-auto">
            Expert mechanics. Lightning-fast service. Vibrant results. Get back on the road with style!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="btn btn-lg btn-primary shadow-xl hover:shadow-[color-mix(in_srgb,var(--theme-primary)_50%,transparent)] animate-pulse-glow touch-button"
            >
              <span className="emoji-icon">⚡</span>
              Book Now - 15% Off!
            </Link>
            <Link
              to="/services"
              className="btn btn-lg btn-outline btn-secondary touch-button"
            >
              <span className="emoji-icon">🔧</span>
              View Services
            </Link>
          </div>

          {/* Desktop Stats */}
          <div className="hidden md:grid grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="card bg-[color-mix(in_srgb,white_10%,transparent)] backdrop-blur-sm border border-[color-mix(in_srgb,white_20%,transparent)]"
              >
                <div className="card-body items-center text-center p-4">
                  <span className="emoji-icon text-3xl mb-2">{stat.emoji}</span>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-[color-mix(in_srgb,white_80%,transparent)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 bg-base-100">
        <div className="container-mobile">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-gradient">Popular Services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`card-body p-6 bg-gradient-to-br ${service.gradient} rounded-2xl`}>
                  <h3 className="card-title text-2xl text-white mb-2">{service.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-bold text-white">{service.price}</div>
                    <div className="badge badge-lg bg-[color-mix(in_srgb,white_20%,transparent)] text-white border-0">
                      {service.time}
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-sm btn-outline border-white text-white hover:bg-[color-mix(in_srgb,white_10%,transparent)] w-full touch-button"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="py-12 bg-base-200">
        <div className="container-mobile">
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card bg-base-100 shadow-sm"
              >
                <div className="card-body items-center text-center p-4">
                  <span className="emoji-icon text-2xl mb-1">{stat.emoji}</span>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-[color-mix(in_srgb,var(--theme-neutral)_70%,transparent)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="mt-8 md:hidden">
            <div className="bg-gradient-vivid rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need Urgent Repair?</h3>
              <p className="text-[color-mix(in_srgb,white_90%,transparent)] mb-4">We offer same-day service!</p>
              <a href="tel:+15551234567" className="btn btn-lg bg-white text-[--theme-primary] touch-button hover:bg-[color-mix(in_srgb,white_90%,transparent)]">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-base-100">
        <div className="container-mobile">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-gradient">Happy Riders</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Alex M.', review: 'Fixed my bike in 2 hours! Amazing service!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Sarah K.', review: 'Professional and affordable. Will come back!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Mike T.', review: 'My e-bike works like new again. Thanks!', rating: '⭐⭐⭐⭐⭐' },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="card bg-base-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">{testimonial.rating}</div>
                <p className="mb-4 italic">"{testimonial.review}"</p>
                <div className="font-semibold text-[--theme-primary]">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
