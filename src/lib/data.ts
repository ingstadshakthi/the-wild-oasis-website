import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export async function getCabins() {
    try {
        const data = await prisma.cabins.findMany({
            orderBy: [
                {
                    name: 'asc',
                },
            ],
            select: {
                id: true,
                name: true,
                maxCapacity: true,
                regularPrice: true,
                discount: true,
                image: true,
            },
        });
        return data;
    } catch (error) {
        return [];
    }
}

export async function getCabin(id: number) {
    try {
        const data = await prisma.cabins.findUnique({
            where: {
                id,
            },
        });
        if (!data) notFound();
        return data;
    } catch (error) {
        console.log(`Error getting cabin ${id} data: `, error);
        notFound();
    }
}


export async function getCountries() {
    try {
        const res = await fetch(
            'https://restcountries.com/v2/all?fields=name,flag'
        );
        const countries = await res.json();
        return countries;
    } catch {
        throw new Error('Could not fetch countries');
    }
}