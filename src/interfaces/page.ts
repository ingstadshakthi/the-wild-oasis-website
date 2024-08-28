export interface RootLayoutProps {
    children: React.ReactNode;
}

export interface CabinsPage {
    searchParams: {
        capacity: string;
    }
}

export interface CabinPage {
    params: {
        cabinId: string;
    }
}

export interface ErrorPage {
    error: { message: string };
    reset: () => void;
}