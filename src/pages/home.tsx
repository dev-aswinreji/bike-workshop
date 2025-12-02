import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero min-h-screen relative">
        <div 
          className="hero-content text-center text-neutral-content"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Professional Bike Repair Services</h1>
            <p className="mb-5 text-lg">
              Expert bike mechanics ready to get you back on the road. Fast, reliable, and affordable service.
            </p>
            <Link to="/booking" className="btn btn-primary btn-lg">Book Service Now</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="card-title">Fast Service</h3>
                <p>Most repairs completed within 24 hours</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="card-title">Expert Mechanics</h3>
                <p>Certified professionals with years of experience</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💲</div>
                <h3 className="card-title">Affordable Prices</h3>
                <p>Competitive pricing with no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-value">500+</div>
              <div className="stat-desc">Happy Customers</div>
            </div>
            <div>
              <div className="stat-value">24h</div>
              <div className="stat-desc">Average Repair Time</div>
            </div>
            <div>
              <div className="stat-value">99%</div>
              <div className="stat-desc">Satisfaction Rate</div>
            </div>
            <div>
              <div className="stat-value">5</div>
              <div className="stat-desc">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
