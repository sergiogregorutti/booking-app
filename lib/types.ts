export interface Center {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
}

export interface Service {
  id: string;
  centerId: string;
  name: string;
  description: string;
  duration: number;
  price: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  centerSlug: string;
  customerName: string;
  customerEmail: string;
  date: string;
  time: string;
  createdAt: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
}

// Hook result types
export interface UseCenterResult {
  center: Center | null;
  services: Service[];
  isLoading: boolean;
  error: string | null;
}

export interface FormErrors {
  name?: string;
  email?: string;
  date?: string;
  time?: string;
}

export interface UseBookingFormResult {
  formData: BookingFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (field: keyof BookingFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}
