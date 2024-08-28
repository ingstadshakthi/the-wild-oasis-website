import { CabinListProps } from '@/interfaces/cabin';
import Link from 'next/link';
import React from 'react';

export function Filter({ filter }: CabinListProps) {
  const filterData = [
    {
      href: '/cabins?capacity=all',
      text: 'All cabins',
      filter: 'all',
    },
    {
      href: '/cabins?capacity=small',
      text: '1-3 guests',
      filter: 'small',
    },
    {
      href: '/cabins?capacity=medium',
      text: '4-7 guests',
      filter: 'medium',
    },
    {
      href: '/cabins?capacity=large',
      text: '8-12 guests',
      filter: 'large',
    },
  ];
  return (
    <div className="border border-primary-800 flex">
      {filterData.map((fil) => (
        <Link href={fil.href} key={fil.href}>
          <button
            type="button"
            className={`px-5 py-2 hover:bg-primary-700 ${filter === fil.filter ? 'bg-primary-700' : ''}`}
          >
            {fil.text}
          </button>
        </Link>
      ))}
    </div>
  );
}
