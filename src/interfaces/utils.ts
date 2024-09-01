export interface Country {
    name: string;
    flag: string;
    independent: boolean;
}

export interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
}

export interface Auth {
    user: User
}