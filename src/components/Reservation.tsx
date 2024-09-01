import React from 'react';
import { getBookedDatesByCabinId, getSettings } from '@/lib/data';
import { ReservationProps } from '@/interfaces/components';
import { auth } from '@/lib/auth';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import LoginMessage from './LoginMessage';

export async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
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
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
