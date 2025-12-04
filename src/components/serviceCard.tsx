import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import type { Service } from '../types'

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div className={`card-moto overflow-hidden ${service.popular ? 'chrome-border-effect scale-105' : ''}`}>
      {service.popular && (
        <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-r-lg">
          <span className="text-sm font-black text-white uppercase">Most Popular</span>
        </div>
      )}
      
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 md:h-56 object-cover"
      />
      
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white">{service.name}</h3>
            <div className="text-gray-400 text-sm">{service.duration}</div>
          </div>
          <div className="text-3xl lg:text-4xl font-black text-orange-500">{service.price}</div>
        </div>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/booking"
          className={`block w-full text-center py-3 rounded-lg font-black uppercase tracking-wide transition-colors touch-moto ${
            service.popular
              ? 'btn-moto'
              : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10'
          }`}
        >
          Book Service
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
