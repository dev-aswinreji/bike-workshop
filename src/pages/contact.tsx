import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="mobile-padding">
      <section className="section-spacing">
        <div className="minimal-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <div className="simple-card p-6">
                  <h2 className="text-xl font-semibold mb-6">Send Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="minimal-input"
                      required
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="minimal-input"
                      required
                    />
                    
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="minimal-input min-h-[150px] resize-none"
                      required
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="simple-btn w-full disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <div className="space-y-6">
                  <div className="simple-card p-6">
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-muted text-sm">123 Motor Street, City</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-muted text-sm">(555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted text-sm">service@motofix.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-muted text-sm">Mon-Fri: 8AM - 6PM</p>
                          <p className="text-muted text-sm">Saturday: 9AM - 4PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="simple-card">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-muted">Map Location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: 'How quickly can you service my motorcycle?',
                    a: 'Most repairs are completed within 24-48 hours.'
                  },
                  {
                    q: 'Do you offer pickup and delivery?',
                    a: 'Yes, we offer free pickup and delivery within the local area.'
                  },
                  {
                    q: 'What brands do you service?',
                    a: 'We service all major motorcycle brands.'
                  },
                ].map((faq, index) => (
                  <div key={index} className="simple-card p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
