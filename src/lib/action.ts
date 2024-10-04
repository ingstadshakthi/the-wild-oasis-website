'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';

export async function updateProfile(formData: FormData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const nationalID = formData.get('nationalID') as string;
    const nationality = (formData.get('nationality') as string)?.split('%')[0];
    const countryFlag = (formData.get('nationality') as string)?.split('%')[1];


    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
        throw new Error("Please provide a valid national ID");

    const updateData = { nationality, countryFlag, nationalID };

    const prisma = new PrismaClient();
    if (!session || !session.user) {
        return
    }
    const user: any = session?.user;
    const id = user.guestId;
    try {

        await prisma.guests.update({
            where: { id },
            data: updateData,
        });
        revalidatePath('/account/profile');
    } catch (error) {
        throw new Error("Guest could not be updated");
    }

}

export async function signInAction() {
    await signIn('google', { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' })
}

