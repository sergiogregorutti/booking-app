'use client';

import { Service } from '@/lib/types';
import ServiceCard from './ServiceCard';

interface ServiceListProps {
  services: Service[];
  isLoading: boolean;
  onBook: (service: Service) => void;
}

function ServiceSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-5 animate-pulse">
      <div className="flex justify-between items-start mb-3">
        <div className="h-6 bg-neutral-200 rounded w-32"></div>
        <div className="h-6 bg-neutral-200 rounded w-12"></div>
      </div>
      <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-neutral-200 rounded w-2/3 mb-4"></div>
      <div className="flex items-center justify-between">
        <div className="h-4 bg-neutral-200 rounded w-16"></div>
        <div className="h-8 bg-neutral-200 rounded w-16"></div>
      </div>
    </div>
  );
}

export default function ServiceList({ services, isLoading, onBook }: ServiceListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <ServiceSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500">No services available at this time.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onBook={onBook} />
      ))}
    </div>
  );
}
