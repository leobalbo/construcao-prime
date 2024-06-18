import { auth } from '@/services/auth'
import { use } from 'react'
import { LogoLinkSVG } from '../logo'
import { DrawerDialogDemo } from './(components)/login-button'
import { NavigationDesktop } from './(components)/navigation-desktop'
import { NavMobile } from './(components)/navigation-mobile'
import { ModeToggle } from './(components)/theme-switcher'
import { UserInfo } from './(components)/user-dropdown'

export function HeaderComponent() {
  const session = use(auth())
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-16">
      <NavMobile />
      <LogoLinkSVG className="hidden lg:flex" />
      <div className="flex w-full justify-center">
        <NavigationDesktop />
      </div>
      <div className="ml-auto flex items-center gap-2">
        {/* <LanguageSlector /> */}
        <ModeToggle />
        {session?.user?.email ? (
          <UserInfo user={session?.user} />
        ) : (
          <DrawerDialogDemo />
        )}
      </div>
    </header>
  )
}
