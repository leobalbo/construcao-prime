import { LogoLinkSVG } from '@/components/utils/logo'
import { checkRole } from '@/utils/roles'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { LucideLogIn } from 'lucide-react'
import { Button } from '../shadcn/button'
import { NavigationDesktop } from './(components)/navigation-desktop'
import { NavMobile } from './(components)/navigation-mobile'
import { UserInfo } from './(components)/user-dropdown'

export async function HeaderComponent() {
  let user
  const { userId } = auth()
  if (userId) {
    user = await currentUser()
  }

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-16">
      <NavMobile />
      <LogoLinkSVG className="hidden lg:flex" h="24px" w="24px" />
      <div className="flex w-full justify-center">
        <NavigationDesktop />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SignedIn>
          <UserInfo
            image={user?.imageUrl || ''}
            name={user?.firstName || ''}
            email={user?.emailAddresses[0]?.emailAddress || ''}
            admin={checkRole('admin')}
          />
        </SignedIn>
        <SignedOut>
          <a href="/login">
            <Button>
              <LucideLogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </a>
        </SignedOut>
      </div>
    </header>
  )
}
