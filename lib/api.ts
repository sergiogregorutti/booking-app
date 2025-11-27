import { centers, services } from './data';
import { Center, Service } from './types';

const SIMULATED_DELAY = 1500;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getCenters(): Promise<Center[]> {
  await delay(SIMULATED_DELAY);
  return centers;
}

export async function getCenterBySlug(slug: string): Promise<Center | null> {
  await delay(SIMULATED_DELAY);
  return centers.find(center => center.slug === slug) || null;
}

export async function getServicesByCenter(centerId: string): Promise<Service[]> {
  await delay(SIMULATED_DELAY);
  return services.filter(service => service.centerId === centerId);
}

export async function getServiceById(serviceId: string): Promise<Service | null> {
  await delay(SIMULATED_DELAY);
  return services.find(service => service.id === serviceId) || null;
}
