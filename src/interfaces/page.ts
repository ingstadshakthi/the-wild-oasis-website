export interface RootLayoutProps {
    children: React.ReactNode;
}

export interface CabinsPage {
    params: {
        cabinId: string;
    }
}

export interface ErrorPage {
    error: { message: string };
    reset: () => void;
}