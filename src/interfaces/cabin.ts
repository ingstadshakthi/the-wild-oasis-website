
export type FilterType = 'all' | 'small' | 'medium' | 'large';

export interface CabinListProps {
    filter: FilterType;
}

export interface GetCabinsData {
    id: number;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    image: string;
}