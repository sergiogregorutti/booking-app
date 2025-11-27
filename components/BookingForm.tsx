'use client';

import { Service, Booking } from '@/lib/types';
import { useBookingForm, getTodayDate } from '@/hooks/useBookingForm';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface BookingFormProps {
  service: Service;
  centerSlug: string;
  onClose: () => void;
  onComplete: (booking: Booking) => void;
}

export default function BookingForm({
  service,
  centerSlug,
  onClose,
  onComplete,
}: BookingFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBookingForm(service.id, service.name, centerSlug, onComplete);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900">
              Book Appointment
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-violet-50 rounded-lg p-4 mb-6">
            <p className="font-medium text-neutral-900">{service.name}</p>
            <p className="text-sm text-violet-600">
              {service.duration} min · ${service.price}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />

            <Input
              label="Date"
              type="date"
              min={getTodayDate()}
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              error={errors.date}
            />

            <Input
              label="Time"
              type="time"
              value={formData.time}
              onChange={(e) => handleChange('time', e.target.value)}
              error={errors.time}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isSubmitting}
                className="flex-1"
              >
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
