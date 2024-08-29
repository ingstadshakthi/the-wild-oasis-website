import { getBookedDatesByCabinId, getCabin } from '@/lib/data';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { cabinId: string } }) {
    console.log(request.nextUrl.href)
    const { cabinId } = params;
    try {
        const [cabin, bookedDates] = await Promise.all([getCabin(Number(cabinId)), getBookedDatesByCabinId(Number(cabinId))])
        return Response.json({ cabin, bookedDates })
    } catch (error) {
        return Response.json({ "message": "Cabin not Found" })
    }
}