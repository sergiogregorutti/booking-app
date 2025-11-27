import { useEffect, useState } from 'react';
import { Center, Service, UseCenterResult } from '@/lib/types';
import { centers } from '@/lib/data';
import { getServicesByCenter } from '@/lib/api';

export function useCenter(slug: string): UseCenterResult {
  const [center, setCenter] = useState<Center | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const foundCenter = centers.find((c) => c.slug === slug);

    if (!foundCenter) {
      setCenter(null);
      setIsLoading(false);
      setError('Center not found');
      return;
    }

    setCenter(foundCenter);
    setError(null);

    const loadServices = async () => {
      setIsLoading(true);
      try {
        const data = await getServicesByCenter(foundCenter.id);
        setServices(data);
      } catch (err) {
        setError('Failed to load services');
        console.error('Failed to load services:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, [slug]);

  return { center, services, isLoading, error };
}
