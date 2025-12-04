export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  bikeType: string;
  bikeBrand: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  bike: string;
  rating: number;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdminBooking extends BookingForm {
  id: number;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
}
