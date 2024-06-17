import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from '../database'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/',
    signOut: '/',
    verifyRequest: '/',
    error: '/',
    newUser: '/',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
})
