import { Booking, BookingFormData } from './types';

const BOOKINGS_KEY = 'beauty_center_bookings';

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getBookings(): Booking[] {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(BOOKINGS_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveBooking(
  formData: BookingFormData,
  serviceId: string,
  serviceName: string,
  centerSlug: string
): Booking {
  const booking: Booking = {
    id: generateId(),
    serviceId,
    serviceName,
    centerSlug,
    customerName: formData.name,
    customerEmail: formData.email,
    date: formData.date,
    time: formData.time,
    createdAt: new Date().toISOString(),
  };

  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));

  return booking;
}

export function getBookingsByCenter(centerSlug: string): Booking[] {
  return getBookings().filter(booking => booking.centerSlug === centerSlug);
}
