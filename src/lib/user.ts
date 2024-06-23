'use server'

import { Roles } from '@/types/globals'
import { auth, currentUser } from '@clerk/nextjs/server'

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth()

  return sessionClaims?.metadata.role === role
}

export async function getUser() {
  let user
  const { userId } = auth()
  if (userId) {
    user = await currentUser()
  }
  return user
}
