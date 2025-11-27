import Link from 'next/link';
import Card from '@/components/ui/Card';
import { centers } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Beauty Booking
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover top beauty centers near you and book your next appointment with ease.
          </p>
        </div>

        <h2 className="text-sm font-medium text-violet-600 uppercase tracking-wide mb-4">
          Available Centers
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {centers.map((center) => (
            <Link key={center.id} href={`/${center.slug}`}>
              <Card hover className="p-6 h-full cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200 group-hover:shadow-violet-300 transition-shadow">
                    <span className="text-xl font-bold text-white">
                      {center.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-violet-700 transition-colors">
                      {center.name}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {center.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-300 group-hover:text-violet-500 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
