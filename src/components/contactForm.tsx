import { useState } from 'react'
import { Send, Mail, Phone, User } from 'lucide-react'
import type { ContactForm } from '../types'

interface ContactFormProps {
  onSubmit: (data: ContactForm) => void
  isLoading?: boolean
}

const ContactForm = ({ onSubmit, isLoading = false }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              placeholder="(555) 123-4567"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            placeholder="How can we help?"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-40 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 resize-none"
          placeholder="Tell us about your motorcycle or service needs..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-moto w-full touch-moto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-5 h-5 inline mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
