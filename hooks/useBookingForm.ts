import { useState, FormEvent, useCallback } from 'react';
import { Booking, BookingFormData, FormErrors, UseBookingFormResult } from '@/lib/types';
import { saveBooking } from '@/lib/storage';

const initialFormData: BookingFormData = {
  name: '',
  email: '',
  date: '',
  time: '',
};

export function useBookingForm(
  serviceId: string,
  serviceName: string,
  centerSlug: string,
  onSuccess: (booking: Booking) => void
): UseBookingFormResult {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTodayDate = (): string => {
    return new Date().toISOString().split('T')[0];
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const today = getTodayDate();
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (formData.date < today) {
      newErrors.date = 'Date must be today or in the future';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    } else if (formData.date === today && formData.time < getCurrentTime()) {
      newErrors.time = 'Time must be in the future';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const booking = saveBooking(formData, serviceId, serviceName, centerSlug);
    setIsSubmitting(false);
    onSuccess(booking);
  }, [formData, validate, serviceId, serviceName, centerSlug, onSuccess]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}
