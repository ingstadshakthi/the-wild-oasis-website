import React from 'react';
import { getBookedDatesByCabinId, getSettings } from '@/lib/data';
import { ReservationProps } from '@/interfaces/components';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';

export async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  if (!settings || !bookedDates) {
    return;
  }
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-96">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
