import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import ContactForm  from '../components/contactForm'
import type { ContactForm as ContactFormType } from '../types'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: ContactFormType) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submitted:', data)
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Garage',
      details: ['123 Motorcycle Avenue', 'Garage City, GC 12345', 'Free parking available'],
      color: 'text-orange-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568', 'Fax: (555) 123-4569'],
      color: 'text-orange-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['service@motorepair.pro', 'support@motorepair.pro', 'custom@motorepair.pro'],
      color: 'text-orange-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM - 8PM', 'Saturday: 9AM - 6PM', 'Sunday: 10AM - 4PM', '24/7 Emergency Service'],
      color: 'text-orange-500'
    },
  ]

  return (
    <div className="moto-mobile-padding">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 carbon-pattern" />
        <div className="container-moto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="moto-heading mb-6">
              <span className="chrome-text">CONTACT OUR</span>
              <span className="block text-orange-500">MOTORCYCLE EXPERTS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our services? Need a custom quote? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-moto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-black text-white mb-8">
                Get in <span className="text-orange-500">Touch</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-moto p-6">
                    <div className={`${info.color} mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="card-moto overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Our Location</h3>
                    <p className="text-gray-400">123 Motorcycle Avenue, Garage City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-moto p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 mb-8">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-moto touch-moto"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
                    <p className="text-gray-400 mb-8">
                      Fill out the form below and we'll contact you as soon as possible.
                    </p>
                    <ContactForm onSubmit={handleSubmit} isLoading={isLoading} />
                  </>
                )}
              </div>

              {/* Emergency Notice */}
              <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="animate-pulse">🚨</span>
                  Emergency Roadside Assistance
                </h3>
                <p className="text-gray-300 mb-4">
                  Stranded on the road? We offer 24/7 emergency motorcycle recovery and repair.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency: (555) 123-4568
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-moto">
          <h2 className="text-3xl font-black text-center mb-12">
            <span className="chrome-text">FREQUENTLY ASKED QUESTIONS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly can you service my motorcycle?',
                answer: 'Most repairs are completed within 24-48 hours. Emergency services are available same-day.'
              },
              {
                question: 'Do you offer pickup and delivery?',
                answer: 'Yes! We offer free pickup and delivery within 20 miles of our garage.'
              },
              {
                question: 'What motorcycle brands do you service?',
                answer: 'We service all major brands including Harley Davidson, Ducati, BMW, Honda, Yamaha, and more.'
              },
              {
                question: 'Do you offer warranty on repairs?',
                answer: 'Yes, all our repairs come with a 1-year warranty on parts and labor.'
              },
              {
                question: 'Can I get a quote before service?',
                answer: 'Absolutely! We provide detailed quotes after inspection. No hidden fees.'
              },
              {
                question: 'Do you work on custom or modified motorcycles?',
                answer: 'Yes, we specialize in custom builds and performance modifications.'
              },
            ].map((faq, index) => (
              <div key={index} className="card-moto p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
