// import { unstable_noStore as noStore } from 'next/cache';
import CabinCard from '@/components/CabinCard';
import { CabinListProps, FilterType, GetCabinsData } from '@/interfaces/cabin';
import { getCabins } from '@/lib/data';

function getFilteredCabins(cabins: GetCabinsData[], filter: FilterType) {
  if (filter === 'small') return cabins.filter((cab) => cab.maxCapacity <= 3);

  if (filter === 'medium')
    return cabins.filter((cab) => cab.maxCapacity > 3 && cab.maxCapacity < 8);

  if (filter === 'large') return cabins.filter((cab) => cab.maxCapacity >= 8);

  return cabins;
}

export async function CabinList({ filter }: CabinListProps) {
  // noStore();
  const cabins = await getCabins();
  if (cabins.length === 0) return null;

  const filteredCabins = getFilteredCabins(cabins, filter);
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {filteredCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}
