import { Center, Service } from './types';

export const centers: Center[] = [
  {
    id: '1',
    name: 'Serenity Spa',
    slug: 'serenity-spa',
    description: 'Your sanctuary for relaxation and rejuvenation. Experience premium spa treatments in a tranquil environment.',
    logo: '/centers/serenity-spa-logo.svg',
  },
  {
    id: '2',
    name: 'Glow Beauty Studio',
    slug: 'glow-beauty',
    description: 'Where beauty meets artistry. Professional hair and makeup services to help you look your best.',
    logo: '/centers/glow-beauty-logo.svg',
  },
];

export const services: Service[] = [
  // Serenity Spa services
  {
    id: 's1',
    centerId: '1',
    name: 'Relaxing Massage',
    description: 'Unwind with a full-body relaxation massage using aromatic oils.',
    duration: 60,
    price: 80,
  },
  {
    id: 's2',
    centerId: '1',
    name: 'Hydrating Facial',
    description: 'Deep hydration treatment for glowing, refreshed skin.',
    duration: 45,
    price: 65,
  },
  {
    id: 's3',
    centerId: '1',
    name: 'Classic Manicure',
    description: 'Complete nail care with polish of your choice.',
    duration: 30,
    price: 35,
  },
  {
    id: 's4',
    centerId: '1',
    name: 'Spa Pedicure',
    description: 'Luxurious foot treatment with exfoliation and massage.',
    duration: 45,
    price: 45,
  },
  // Glow Beauty Studio services
  {
    id: 's5',
    centerId: '2',
    name: 'Haircut & Styling',
    description: 'Professional cut and blow-dry styling by expert stylists.',
    duration: 45,
    price: 50,
  },
  {
    id: 's6',
    centerId: '2',
    name: 'Hair Coloring',
    description: 'Full color transformation with premium products.',
    duration: 120,
    price: 120,
  },
  {
    id: 's7',
    centerId: '2',
    name: 'Deep Conditioning',
    description: 'Intensive hair repair treatment for damaged hair.',
    duration: 30,
    price: 40,
  },
  {
    id: 's8',
    centerId: '2',
    name: 'Professional Makeup',
    description: 'Flawless look for any special occasion.',
    duration: 60,
    price: 75,
  },
  {
    id: 's9',
    centerId: '2',
    name: 'Facial Waxing',
    description: 'Gentle hair removal for brows and upper lip.',
    duration: 20,
    price: 25,
  },
];
