import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import BookingForm from '../components/bookingForm'
import type { BookingForm as BookingFormType } from '../types'

const Booking = () => {
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: BookingFormType) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Booking submitted:', data)
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleNewBooking = () => {
    setIsSubmitted(false)
  }

  return (
    <div className="moto-mobile-padding">
      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-moto">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="moto-heading mb-4">
                    <span className="chrome-text">BOOK YOUR</span>
                    <span className="block text-orange-500">MOTORCYCLE SERVICE</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Schedule your motorcycle repair service in 4 easy steps.
                  </p>
                </div>

                <BookingForm onSubmit={handleSubmit} isLoading={isLoading} />
              </>
            ) : (
              <div className="text-center py-16">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  BOOKING CONFIRMED! 🎉
                </h2>
                
                <div className="card-moto max-w-lg mx-auto p-8 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Your Service Details</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for choosing Moto Repair Pro! We've received your booking request.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">We'll contact you within 1 hour to confirm your appointment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Please have your motorcycle ready for service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Emergency? Call us at (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/')}
                    className="btn-moto touch-moto"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={handleNewBooking}
                    className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-bold uppercase tracking-wide hover:bg-orange-500/10 transition-colors touch-moto"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 rounded-lg text-white font-bold hover:bg-gray-800 transition-colors"
                  >
                    📞 Call Now: (555) 123-4567
                  </a>
                  <a
                    href="mailto:help@motorepair.pro"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-bold hover:bg-orange-500/10 transition-colors"
                  >
                    ✉️ Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
