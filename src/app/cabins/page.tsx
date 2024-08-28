import { CabinList } from '@/components/CabinList';
import { Filter } from '@/components/Filter';
import Spinner from '@/components/Spinner';
import { FilterType } from '@/interfaces/cabin';
import { CabinsPage } from '@/interfaces/page';
import { Suspense } from 'react';

export const metadata = {
  title: 'Cabins Page',
};

// export const revalidate = 0; makes a new request on every call
export const revalidate = 3600; // fetches data every hour

export default function Page({ searchParams }: CabinsPage) {
  const filter = (searchParams.capacity ?? 'all') as FilterType;
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter filter={filter} />
      </div>
      <Suspense fallback={<Spinner />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
