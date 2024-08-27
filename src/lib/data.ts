import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCabins = async () => {
    try {
        const data = await prisma.cabins.findMany({
            orderBy: [
                {
                    name: 'asc'
                }
            ],
            select: {
                id: true,
                name: true,
                maxCapacity: true,
                regularPrice: true,
                discount: true,
                image: true,
            }
        })
        return data;
    } catch (error) {
        return [];
    }
};