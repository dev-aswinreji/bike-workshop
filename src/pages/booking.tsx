import { useState } from 'react'

const Booking = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bikeType: '',
    serviceType: '',
    date: '',
    time: '',
    description: ''
  })

  const bikeTypes = [
    { value: 'road', label: 'Road Bike', emoji: '🚴' },
    { value: 'mountain', label: 'Mountain', emoji: '🏔️' },
    { value: 'hybrid', label: 'Hybrid', emoji: '🚲' },
    { value: 'electric', label: 'E-Bike', emoji: '⚡' },
    { value: 'bmx', label: 'BMX', emoji: '🤸' },
    { value: 'kids', label: 'Kids', emoji: '👶' },
  ]

  const services = [
    { value: 'basic', label: 'Basic Tune-up', price: '$49', emoji: '🔧' },
    { value: 'premium', label: 'Premium Service', price: '$99', emoji: '✨' },
    { value: 'overhaul', label: 'Full Overhaul', price: '$149', emoji: '🔄' },
    { value: 'emergency', label: 'Emergency Fix', price: '$79', emoji: '🚨' },
  ]

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setStep(4) // Success step
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container-mobile py-8 pb-24">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= s ? 'bg-[--theme-primary] text-white' : 'bg-[color-mix(in_srgb,var(--theme-neutral)_20%,transparent)]'
              }`}>
                {s === 4 ? '🎉' : s}
              </div>
              {s < 4 && (
                <div className={`w-12 h-1 ${step > s ? 'bg-[--theme-primary]' : 'bg-[color-mix(in_srgb,var(--theme-neutral)_20%,transparent)]'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm px-2">
          <span>Bike</span>
          <span>Service</span>
          <span>Details</span>
          <span>Confirm</span>
        </div>
      </div>

      {/* Step 1: Bike Type */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Bike Type</h2>
          <div className="grid grid-cols-2 gap-3">
            {bikeTypes.map((bike) => (
              <button
                key={bike.value}
                type="button"
                onClick={() => {
                  updateFormData('bikeType', bike.value)
                  handleNext()
                }}
                className={`card touch-button h-32 ${
                  formData.bikeType === bike.value 
                    ? 'border-2 border-[--theme-primary] bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]' 
                    : 'border border-transparent hover:border-[color-mix(in_srgb,var(--theme-primary)_50%,transparent)]'
                }`}
              >
                <div className="card-body items-center justify-center p-4">
                  <span className="emoji-icon text-4xl mb-2">{bike.emoji}</span>
                  <span className="font-medium">{bike.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Service */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Service</h2>
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.value}
                type="button"
                onClick={() => {
                  updateFormData('serviceType', service.value)
                  handleNext()
                }}
                className={`card w-full touch-button ${
                  formData.serviceType === service.value 
                    ? 'border-2 border-[--theme-primary] bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]' 
                    : 'border border-transparent hover:border-[color-mix(in_srgb,var(--theme-primary)_50%,transparent)]'
                }`}
              >
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="emoji-icon text-2xl">{service.emoji}</span>
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{service.label}</h3>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[--theme-primary]">
                      {service.price}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Details</h2>
          
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="card bg-base-200">
              <div className="card-body p-4 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="input input-bordered w-full touch-button"
                  required
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="input input-bordered w-full touch-button"
                    required
                  />
                  
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="input input-bordered w-full touch-button"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="card bg-base-200">
              <div className="card-body p-4 space-y-4">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData('date', e.target.value)}
                  className="input input-bordered w-full touch-button"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
                
                <div>
                  <label className="label-text block mb-2 font-semibold">Preferred Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['🌅 Morning', '☀️ Afternoon', '🌆 Evening'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => updateFormData('time', time.split(' ')[0])}
                        className={`btn btn-sm ${
                          formData.time === time.split(' ')[0] ? 'btn-primary' : 'btn-outline'
                        } touch-button`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <textarea
                  placeholder="Special instructions or issues..."
                  value={formData.description}
                  onChange={(e) => updateFormData('description', e.target.value)}
                  className="textarea textarea-bordered w-full h-32 touch-button"
                />
              </div>
            </div>

            {/* Summary */}
            {formData.bikeType && formData.serviceType && (
              <div className="card bg-gradient-to-r from-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)] to-[color-mix(in_srgb,var(--theme-secondary)_10%,transparent)]">
                <div className="card-body p-4">
                  <h3 className="font-bold mb-2">Booking Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Bike:</span>
                      <span className="font-semibold">
                        {bikeTypes.find(b => b.value === formData.bikeType)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-semibold">
                        {services.find(s => s.value === formData.serviceType)?.label}
                      </span>
                    </div>
                    {formData.date && (
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-semibold">
                          {new Date(formData.date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-outline flex-1 touch-button"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="btn btn-primary flex-1 touch-button shadow-lg"
              >
                Confirm Booking →
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Step 4: Success */}
      {step === 4 && (
        <div className="text-center animate-fadeIn py-12">
          <div className="emoji-icon text-8xl mb-6 animate-bounce-slow">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
          <p className="text-lg mb-6">
            Thank you for choosing BikeRepair Pro! We'll contact you soon to confirm your appointment.
          </p>
          
          <div className="card bg-base-200 mb-6">
            <div className="card-body">
              <h3 className="font-bold mb-2">Your Appointment</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-semibold">
                    {services.find(s => s.value === formData.serviceType)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-semibold">
                    {formData.date && new Date(formData.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-semibold">
                    {formData.time || 'To be confirmed'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <a
              href="/"
              className="btn btn-primary w-full touch-button"
            >
              Back to Home
            </a>
            <button
              onClick={() => {
                setStep(1)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  bikeType: '',
                  serviceType: '',
                  date: '',
                  time: '',
                  description: ''
                })
              }}
              className="btn btn-outline w-full touch-button"
            >
              Book Another Service
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Booking
