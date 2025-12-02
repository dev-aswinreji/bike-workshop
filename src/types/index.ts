export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  bikeType: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
}

export interface Booking extends BookingForm {
  id: number;
  status: string;
  createdAt: string;
}
