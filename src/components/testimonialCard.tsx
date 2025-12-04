import { Star } from 'lucide-react'
import type { Testimonial } from '../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="card-moto p-6 md:p-8">
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
        ))}
      </div>
      <p className="text-gray-300 mb-8 italic text-lg">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white font-black text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-black text-white text-lg">{testimonial.name}</div>
          <div className="text-gray-400">{testimonial.role}</div>
          <div className="text-orange-500 text-sm font-bold">{testimonial.bike}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
