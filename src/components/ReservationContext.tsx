'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';
import { DateRange } from 'react-day-picker';

interface ReservationRange {
  from?: DateRange;
  to?: DateRange;
}

interface ReservationContextType {
  range: ReservationRange;
  setRange: Dispatch<SetStateAction<ReservationRange>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState: ReservationRange = { from: undefined, to: undefined };

interface ReservationProviderProps {
  children: ReactNode;
}

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<any>(initialState);
  const resetRange = () => setRange(initialState);

  const value = useMemo(
    () => ({ range, setRange, resetRange }),
    [range, setRange, resetRange],
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('Context was used outside provider');
  }
  return context;
}

export { ReservationProvider, useReservation };
