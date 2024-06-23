import { Button } from '@/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { LogoLinkSVG } from '@/components/utils/logo'
import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import {
  Cog,
  CreditCard,
  LogOut,
  LucideFileBarChart2,
  LucideLogIn,
  LucidePackagePlus,
  LucideTruck,
  UserRound,
} from 'lucide-react'
import { NavigationDesktop } from './_components/navigation-desktop'
import { NavMobile } from './_components/navigation-mobile'

import { Avatar, AvatarImage } from '@/components/shadcn/avatar'
import { checkRole, getUser } from '@/lib/user'

export async function Header() {
  const user = await getUser()
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-16">
      <NavMobile />
      <LogoLinkSVG className="hidden lg:flex" h="24px" w="24px" />
      <div className="flex w-full justify-center">
        <NavigationDesktop />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="">
                <AvatarImage src={user?.imageUrl} alt="Avatar" />
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                {user?.fullName}
                <span className="text-xs font-light text-zinc-500">
                  {user?.emailAddresses[0]?.emailAddress}
                </span>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem className="flex space-x-2">
                  <UserRound size={16} strokeWidth={1} />
                  <span>Seu Perfil</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex space-x-2">
                  <CreditCard size={16} strokeWidth={1} />
                  <span>Compras</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex space-x-2">
                  <LucideTruck size={16} strokeWidth={1} />
                  <span>Rastrear pedidos</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex space-x-2">
                  <Cog size={16} strokeWidth={1} />
                  <span>Configurações</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {checkRole('admin') && (
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex space-x-2">
                    <LucideFileBarChart2 size={16} strokeWidth={1} />
                    <span>Painel Admin</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex space-x-2">
                    <LucidePackagePlus size={16} strokeWidth={1} />
                    <span>Novo produto</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuGroup>
              )}

              <SignOutButton>
                <DropdownMenuItem className="flex space-x-2">
                  <LogOut size={16} strokeWidth={1} />
                  <span>Sair</span>
                </DropdownMenuItem>
              </SignOutButton>
            </DropdownMenuContent>
          </DropdownMenu>
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
