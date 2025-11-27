'use client';

import { Booking } from '@/lib/types';
import Button from '@/components/ui/Button';

interface BookingConfirmationProps {
  booking: Booking;
  onClose: () => void;
}

export default function BookingConfirmation({
  booking,
  onClose,
}: BookingConfirmationProps) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-200">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-neutral-600 mb-6">
            Your appointment has been successfully scheduled.
          </p>

          <div className="bg-violet-50 rounded-lg p-4 text-left mb-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-neutral-500">Service</p>
                <p className="font-medium text-neutral-900">{booking.serviceName}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Date & Time</p>
                <p className="font-medium text-neutral-900">
                  {formatDate(booking.date)} at {formatTime(booking.time)}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Name</p>
                <p className="font-medium text-neutral-900">{booking.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <p className="font-medium text-neutral-900">{booking.customerEmail}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mb-6">
            A confirmation email will be sent to your email address.
          </p>

          <Button onClick={onClose} className="w-full">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
