import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bike: '',
    service: '',
    date: '',
    message: ''
  })

  const services = [
    { value: 'engine', label: 'Engine Repair', price: '$199' },
    { value: 'brakes', label: 'Brake Service', price: '$149' },
    { value: 'oil', label: 'Oil Change', price: '$69' },
    { value: 'tire', label: 'Tire Change', price: '$129' },
  ]

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking submitted:', formData)
      setIsSubmitting(false)
      navigate('/booking/success')
    }, 1500)
  }

  return (
    <div className="mobile-padding">
      <section className="section-spacing">
        <div className="minimal-container max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= s ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 h-1 ${step > s ? 'bg-gray-900' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-6">Book Service</h1>

          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="minimal-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="minimal-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="minimal-input"
                />
                <button onClick={handleNext} className="simple-btn w-full">
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Service Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Motorcycle Make & Model"
                  value={formData.bike}
                  onChange={(e) => handleChange('bike', e.target.value)}
                  className="minimal-input"
                />
                
                <select
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="minimal-input"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label} - {service.price}
                    </option>
                  ))}
                </select>
                
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="minimal-input"
                  min={new Date().toISOString().split('T')[0]}
                />
                
                <textarea
                  placeholder="Additional notes or issues..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="minimal-input min-h-[100px] resize-none"
                />
                
                <div className="flex gap-4">
                  <button 
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex-1 simple-btn"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-6">Review & Confirm</h2>
              
              <div className="simple-card p-6 mb-6">
                <h3 className="font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Name:</span>
                    <span>{formData.name || '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Phone:</span>
                    <span>{formData.phone || '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Motorcycle:</span>
                    <span>{formData.bike || '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Service:</span>
                    <span>{services.find(s => s.value === formData.service)?.label || '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Date:</span>
                    <span>{formData.date || '—'}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 simple-btn disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Booking
