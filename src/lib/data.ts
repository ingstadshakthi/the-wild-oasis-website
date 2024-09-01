import { Guests, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { eachDayOfInterval } from 'date-fns';

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

export async function getSettings() {
    try {
        const data = await prisma.settings.findFirst();
        return data;
    } catch (error: any) {
        throw new Error(error?.message || '')
    }
}

export async function getBookedDatesByCabinId(cabinId: number) {

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    // Getting all bookings
    const bookings = await prisma.bookings.findMany({
        where: {
            cabinId,
            OR: [
                {
                    startDate: {
                        gte: today.toISOString(),
                    },
                },
                {
                    status: 'checked-in',
                },
            ],
        },
    });

    // Converting to actual dates to be displayed in the date picker
    const bookedDates = bookings
        .map((booking) => eachDayOfInterval({
            start: new Date(booking.startDate),
            end: new Date(booking.endDate),
        }))
        .flat();

    return bookedDates;
}

export async function getGuest(email: string): Promise<Guests | null> {
    try {
        const guest = await prisma.guests.findFirst({
            where: {
                email,
            },
        });
        return guest;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function createGuest(newGuest: { email: string, fullName: string }): Promise<Guests> {
    try {
        const guest = await prisma.guests.create({
            data: newGuest,
        });
        return guest;
    } catch (error) {
        console.error(error);
        throw new Error('Guest could not be created');
    }
}