'use client';

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  const formatDuration = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
  };

  const formatPrice = (price: number): string => {
    return `$${price}`;
  };

  return (
    <Card hover className="p-5 group hover:border-violet-200 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-neutral-900">
          {service.name}
        </h3>
        <span className="text-lg font-bold text-violet-600">
          {formatPrice(service.price)}
        </span>
      </div>

      <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {formatDuration(service.duration)}
        </div>
        <Button size="sm" onClick={() => onBook(service)}>
          Book Now
        </Button>
      </div>
    </Card>
  );
}
