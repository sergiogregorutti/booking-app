import Link from 'next/link';
import { Center } from '@/lib/types';

interface CenterHeaderProps {
  center: Center;
}

export default function CenterHeader({ center }: CenterHeaderProps) {
  return (
    <div className="mb-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-violet-600 hover:text-violet-800 mb-6 font-medium"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to all centers
      </Link>

      <div className="flex items-start gap-5">
        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
          <span className="text-3xl font-bold text-white">
            {center.name.charAt(0)}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {center.name}
          </h1>
          <p className="text-neutral-600 leading-relaxed">
            {center.description}
          </p>
        </div>
      </div>
    </div>
  );
}
