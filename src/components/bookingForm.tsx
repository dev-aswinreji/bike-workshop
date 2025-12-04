import { useState } from 'react'
import { Calendar, Clock, Bike, CheckCircle } from 'lucide-react'
import type { BookingForm } from '../types'

interface BookingFormProps {
  onSubmit: (data: BookingForm) => void
  isLoading?: boolean
}

const BookingForm = ({ onSubmit, isLoading = false }: BookingFormProps) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    bikeType: '',
    bikeBrand: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    description: ''
  })

  const bikeTypes = [
    { value: 'cruiser', label: 'Cruiser', icon: '🏍️' },
    { value: 'sport', label: 'Sport Bike', icon: '⚡' },
    { value: 'tourer', label: 'Tourer', icon: '🚗' },
    { value: 'adventure', label: 'Adventure', icon: '🗻' },
    { value: 'naked', label: 'Naked', icon: '💪' },
    { value: 'scooter', label: 'Scooter', icon: '🛵' },
  ]

  const bikeBrands = [
    'Harley Davidson', 'Ducati', 'BMW', 'Honda', 'Yamaha', 'Kawasaki', 'Triumph', 'Indian', 'Suzuki', 'KTM'
  ]

  const services = [
    { value: 'engine', label: 'Engine Tune-up', price: '$199', duration: '2-3h' },
    { value: 'premium', label: 'Premium Service', price: '$399', duration: '4-6h' },
    { value: 'overhaul', label: 'Complete Overhaul', price: '$999', duration: '1-2 Weeks' },
    { value: 'emergency', label: 'Emergency Repair', price: '$149', duration: '1-2h' },
  ]

  const timeSlots = [
    { value: 'morning', label: '🌅 Morning (9AM-12PM)' },
    { value: 'afternoon', label: '☀️ Afternoon (12PM-5PM)' },
    { value: 'evening', label: '🌆 Evening (5PM-8PM)' },
  ]

  const handleChange = (field: keyof BookingForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= s ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400'
            }`}>
              {s === 4 ? '🎯' : s}
            </div>
            {s < 4 && (
              <div className={`w-16 h-1 ${step > s ? 'bg-orange-500' : 'bg-gray-800'}`} />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Select Your Motorcycle Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bikeTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => {
                  handleChange('bikeType', type.value)
                  handleNext()
                }}
                className={`card-moto p-6 text-center touch-moto ${
                  formData.bikeType === type.value ? 'border-orange-500' : ''
                }`}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <div className="font-bold text-white">{type.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Choose Motorcycle Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {bikeBrands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => {
                  handleChange('bikeBrand', brand)
                  handleNext()
                }}
                className={`card-moto p-4 text-center touch-moto ${
                  formData.bikeBrand === brand ? 'border-orange-500' : ''
                }`}
              >
                <div className="font-medium text-sm text-gray-300">{brand}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Select Service</h2>
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.value}
                type="button"
                onClick={() => {
                  handleChange('serviceType', service.value)
                  handleNext()
                }}
                className={`card-moto w-full p-6 touch-moto ${
                  formData.serviceType === service.value ? 'border-orange-500' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{service.label}</h3>
                    <p className="text-gray-400">{service.duration}</p>
                  </div>
                  <div className="text-2xl font-black text-orange-500">{service.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit} className="animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Your Details & Schedule</h2>
          
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="card-moto p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  required
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="card-moto p-6">
              <h3 className="text-xl font-bold text-white mb-4">Schedule Appointment</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-orange-500"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleChange('preferredTime', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-orange-500"
                    required
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>{slot.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card-moto p-6">
              <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
              <textarea
                placeholder="Describe any issues or special requests..."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>

            {/* Summary */}
            {(formData.bikeType || formData.bikeBrand || formData.serviceType) && (
              <div className="card-moto p-6 bg-gradient-to-r from-orange-500/10 to-orange-500/5">
                <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                <div className="space-y-2">
                  {formData.bikeType && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Motorcycle Type:</span>
                      <span className="font-bold text-white">
                        {bikeTypes.find(t => t.value === formData.bikeType)?.label}
                      </span>
                    </div>
                  )}
                  {formData.bikeBrand && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Brand:</span>
                      <span className="font-bold text-white">{formData.bikeBrand}</span>
                    </div>
                  )}
                  {formData.serviceType && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service:</span>
                      <span className="font-bold text-white">
                        {services.find(s => s.value === formData.serviceType)?.label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-bold uppercase hover:bg-orange-500/10 transition-colors touch-moto"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 btn-moto touch-moto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default BookingForm
