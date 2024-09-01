import NextAuth from 'next-auth'
import Google from "next-auth/providers/google"
import { createGuest, getGuest } from './data'

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks: {
        authorized({ auth }: any) {
            return !!auth?.user
        },
        async signIn({ user }: any) {
            try {
                const existingUser = await getGuest(user.email);

                if (!existingUser) {
                    await createGuest({ email: user.email, fullName: user.name })
                }
                return true;
            } catch (error) {

                return false;
            }
        },
        async session({ session }: any) {
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest?.id;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
}

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig)