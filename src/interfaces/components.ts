import { Cabins, Settings } from '@prisma/client';
import { GetCabinsData } from './cabin';

export interface UpdateProfileFormProps {
    children: React.ReactNode;
}

export interface SelectCountryProps {
    defaultCountry: any;
    name: any;
    id: any;
    className: any;
}

export interface ReservationProps {
    cabin: GetCabinsData
}

export interface CabinProps {
    cabin: Cabins
}

export interface DateSelectorProps {
    settings: Settings;
    bookedDates: Date[];
    cabin: GetCabinsData;
}

export interface ReservationFormProps {
    cabin: GetCabinsData;
    user: {
        id?: string
        name?: string | null
        email?: string | null
        image?: string | null
    }
}