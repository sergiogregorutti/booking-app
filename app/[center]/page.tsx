'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Service, Booking } from '@/lib/types';
import { useCenter } from '@/hooks/useCenter';
import CenterHeader from '@/components/CenterHeader';
import ServiceList from '@/components/ServiceList';
import BookingForm from '@/components/BookingForm';
import BookingConfirmation from '@/components/BookingConfirmation';

export default function CenterPage() {
  const params = useParams();
  const slug = params.center as string;

  const { center, services, isLoading } = useCenter(slug);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const handleBook = (service: Service) => {
    setSelectedService(service);
    setConfirmedBooking(null);
  };

  const handleBookingComplete = (booking: Booking) => {
    setSelectedService(null);
    setConfirmedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleCloseConfirmation = () => {
    setConfirmedBooking(null);
  };

  if (!isLoading && !center) {
    notFound();
  }

  if (!center) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <CenterHeader center={center} />

        <section>
          <h2 className="text-sm font-medium text-violet-600 uppercase tracking-wide mb-4">
            Our Services
          </h2>
          <ServiceList
            services={services}
            isLoading={isLoading}
            onBook={handleBook}
          />
        </section>
      </main>

      {selectedService && (
        <BookingForm
          service={selectedService}
          centerSlug={slug}
          onClose={handleCloseModal}
          onComplete={handleBookingComplete}
        />
      )}

      {confirmedBooking && (
        <BookingConfirmation
          booking={confirmedBooking}
          onClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
}
