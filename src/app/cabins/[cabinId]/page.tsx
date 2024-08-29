import { Cabin } from '@/components/Cabin';
import { Reservation } from '@/components/Reservation';
import Spinner from '@/components/Spinner';
import { CabinPage } from '@/interfaces/page';
import { getCabin } from '@/lib/data';
import { Suspense } from 'react';

// export const metadata = {
//   title: 'Cabin',
// };

export async function generateMetadata({ params }: CabinPage) {
  const { name } = await getCabin(Number(params.cabinId));
  return {
    title: `Cabin ${name}`,
  };
}

// export async function generateStaticParams() {
//   const cabins = await getCabins();
//   const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
//   return ids;
// }

export default async function Page({ params }: CabinPage) {
  const cabin = await getCabin(Number(params.cabinId));
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
