import { Bike, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Wrench } from 'lucide-react'

const MotoFooter = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Book Repair', href: '/booking' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gallery', href: '#' },
    { label: 'About Us', href: '#' },
  ]

  const services = [
    { label: 'Engine Repair', href: '/services' },
    { label: 'Transmission Service', href: '/services' },
    { label: 'Brake System', href: '/services' },
    { label: 'Suspension Tuning', href: '/services' },
    { label: 'Custom Builds', href: '/services' },
    { label: 'Performance Upgrades', href: '/services' },
  ]

  const contactInfo = [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'service@motorepair.pro', href: 'mailto:service@motorepair.pro' },
    { icon: MapPin, text: '123 Motorcycle Ave, Garage City', href: '#' },
    { icon: Clock, text: '24/7 Emergency Service', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ]

  return (
    <footer className="bg-black border-t-2 border-orange-500">
      <div className="container-moto py-12 md:py-16">
        {/* Emergency Banner */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-xl font-black text-white uppercase">24/7 EMERGENCY ROADSIDE SERVICE</h3>
                <p className="text-orange-100">Stranded? We'll come to you!</p>
              </div>
            </div>
            <a 
              href="tel:+15551234567" 
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-black uppercase tracking-wide hover:bg-gray-100 transition-colors touch-moto"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white tracking-wider">MOTO REPAIR PRO</div>
                <div className="text-sm text-orange-500 font-bold uppercase tracking-widest">Premium Garage</div>
              </div>
            </div>
            <p className="text-gray-400">
              Expert motorcycle repair services with precision, passion, and performance since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 uppercase">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 uppercase">Our Services</h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors py-2 font-medium"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-black text-white mb-6 uppercase">Contact Us</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{info.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-black text-white mb-4 uppercase">Garage Updates</h3>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-black uppercase tracking-wide hover:shadow-exhaust transition-shadow"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Moto Repair Pro Garage. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MotoFooter
