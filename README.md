# Beauty Booking - Multi-tenant Booking System

A modern booking system for beauty centers built with Next.js 16, React 19, TypeScript, and TailwindCSS.

## Live Demo

[https://booking-app-self-psi.vercel.app/](https://booking-app-self-psi.vercel.app/)

## Features

- **Multi-tenant Architecture**: Each beauty center has its own landing page (`/serenity-spa`, `/glow-beauty`)
- **Service Listing**: Display services with name, duration, price, and description
- **Booking System**: Book appointments with form validation
- **Confirmation**: Success message with booking details
- **Persistence**: Bookings saved to LocalStorage
- **Responsive Design**: Mobile-first, works on all devices
- **Loading States**: Skeleton loaders and spinners for better UX

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd booking-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Technical Decisions

### Framework & Architecture

- **Next.js 16 App Router**: Chosen for its file-based routing, server components, and performance
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS v4**: Utility-first CSS for rapid, consistent styling

### State Management

- **useState + useContext**: Kept simple intentionally. For this MVP scale, React's built-in hooks are sufficient without adding external dependencies like Redux or Zustand

### Data & API

- **Mock Data**: Static data simulating a real API response
- **Simulated Delay**: 1.5s delay on API calls to demonstrate loading states
- **LocalStorage**: Bookings persist across browser sessions

### Component Design

- **Modular Components**: Reusable UI components (`Button`, `Input`, `Card`)
- **Custom Hooks**: `useCenter` for data fetching, `useBookingForm` for form logic
- **Client Components**: Used only where interactivity is needed
- **Skeleton Loading**: Visual feedback while data loads

## Project Structure

```
app/
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Home page with centers list
├── globals.css          # Global styles
└── [center]/
    ├── page.tsx         # Dynamic center page
    └── not-found.tsx    # 404 for invalid centers

components/
├── ui/                  # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── BookingConfirmation.tsx
├── BookingForm.tsx
├── CenterHeader.tsx
├── ServiceCard.tsx
└── ServiceList.tsx

lib/
├── api.ts               # Simulated API functions
├── data.ts              # Mock data
├── storage.ts           # LocalStorage helpers
└── types.ts             # TypeScript interfaces

hooks/
├── useCenter.ts         # Hook for fetching center and services
└── useBookingForm.ts    # Hook for form state and validation
```

## Assumptions

1. **No Authentication**: Users can book without logging in
2. **No Backend**: All data is mocked; bookings saved to LocalStorage
3. **No Payment**: Booking confirmation doesn't include payment processing
4. **Single Language**: English only
5. **Business Hours**: No validation for business hours; any time can be selected

## Form Validation

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Date**: Required, must be today or future
- **Time**: Required, must be future if date is today

## Features for Future Development

With more time, I would implement:

1. **Backend Integration**: Real API with database (PostgreSQL/MongoDB)
2. **User Authentication**: Login/signup for returning customers
3. **Admin Dashboard**: Center owners can manage services and view bookings
4. **Calendar View**: Visual calendar for date/time selection
5. **Email Notifications**: Confirmation emails via SendGrid/Resend
6. **Payment Integration**: Stripe for deposits/payments
7. **Availability System**: Real-time slot availability

## AI Tools Usage

This project was developed with assistance from Claude. The AI was used for:

**Pros:**

- Rapid scaffolding and boilerplate generation
- Consistent code patterns across components
- TypeScript types and validation logic
- README documentation

**Cons:**

- Required careful review of generated code
- Some adjustments needed for specific business logic
- AI suggestions needed alignment with project conventions

**Findings:**

- AI significantly speeds up initial development
- Human oversight essential for quality and correctness
- Best used for repetitive patterns and documentation

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React Framework
- [React 19](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [TailwindCSS v4](https://tailwindcss.com/) - Styling
- [Geist Font](https://vercel.com/font) - Typography
