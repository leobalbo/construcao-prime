import { auth } from '@/services/auth'
import { use } from 'react'
import { DrawerDialogDemo } from './_components/login-dialog'
import { NavigationMenuDemo } from './_components/navigation'
import { UserInfo } from './_components/user-info'

export function HeaderComponent() {
  const session = use(auth())
  return (
    <header className="top-0 z-50 flex w-full items-center justify-between px-32 py-4">
      <div className="flex items-center">
        <span className="text-lg font-bold">Contrução Prime</span>
      </div>
      <NavigationMenuDemo />
      {session?.user?.email ? (
        <UserInfo user={session?.user} />
      ) : (
        <DrawerDialogDemo />
      )}
    </header>
  )
}
