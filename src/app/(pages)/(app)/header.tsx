import { Button } from '@/components/shadcn/button'
import { LogoLinkSVG, LogoSVG } from '@/components/utils/logo'
import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import {
  Cog,
  CreditCard,
  LogOut,
  LucideFileBarChart2,
  LucideLogIn,
  LucidePackagePlus,
  LucideTruck,
  Menu,
  UserRound,
} from 'lucide-react'

import { Dialog, DialogTrigger } from '@/components/shadcn/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn/sheet'
import { checkRole, getUser } from '@/lib/user'
import { getMenuList } from '@/utils/menu-list'

import { Avatar, AvatarImage } from '@/components/shadcn/avatar'
import Link from 'next/link'
import { ReactElement } from 'react'
import { UserSettingsDialog } from './_components/user-settings'

interface MenuItemProps {
  href: string
  name: string
  icon: ReactElement
}

function MenuItem(props: MenuItemProps) {
  return (
    <Button asChild variant="ghost">
      <Link href={props.href} className="" prefetch={false}>
        {props.icon}
        {props.name}
      </Link>
    </Button>
  )
}

export async function Header() {
  const user = await getUser()
  const menuGroups = getMenuList()

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-16">
      {/* MENU MOBILE */}
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="invisible" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu de navegação</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="h-full w-full">
            <div className="flex flex-col space-y-4">
              <SheetHeader>
                <SheetTitle className="flex justify-center">
                  <Link href="/" className="flex justify-center space-x-4">
                    <LogoSVG width="24px" height="24px" />
                    <span>Construção Prime</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {menuGroups.map((group, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  {group.groupLabel.trim() && (
                    <p className="flex justify-center truncate text-sm font-medium text-muted-foreground">
                      {group.groupLabel}
                    </p>
                  )}
                  {group.menus.map((menu, menuIndex) => (
                    <MenuItem
                      key={menuIndex}
                      href={menu.href}
                      name={menu.label}
                      icon={
                        <menu.icon size={16} strokeWidth={1} className="mr-2" />
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* LOGO MOBILE */}
      <div className="flex w-full justify-center lg:hidden">
        <LogoLinkSVG
          className="flex items-center lg:hidden"
          h="24px"
          w="24px"
        />
      </div>

      {/* NAV DESKTOP */}
      <LogoLinkSVG className="hidden lg:flex" h="24px" w="24px" />
      <div className="hidden w-full justify-center space-x-2 lg:flex">
        {menuGroups[0].menus.map((menu, index) => (
          <a
            href={menu.href}
            key={`${index}-${index}`}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            <Button variant="invisible">
              <menu.icon size={16} strokeWidth={1} className="mr-2 h-4 w-4" />
              {menu.label}
            </Button>
          </a>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="">
                <AvatarImage src={user?.imageUrl} alt="Avatar" />
              </Avatar>
            </DropdownMenuTrigger>

            <Dialog>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                  {user?.fullName}
                  <span className="text-xs font-light text-zinc-500">
                    {user?.emailAddresses[0]?.emailAddress}
                  </span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <Dialog>
                    <DialogTrigger asChild>
                      <DropdownMenuItem
                        preventCloseOnSelect={true}
                        className="flex space-x-2"
                      >
                        <UserRound size={16} strokeWidth={1} />
                        <span>Seu Perfil</span>
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <UserSettingsDialog />
                  </Dialog>

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
                  <>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="flex space-x-2">
                        <LucideFileBarChart2 size={16} strokeWidth={1} />
                        <span>Painel Admin</span>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="flex space-x-2">
                        <LucidePackagePlus size={16} strokeWidth={1} />
                        <span>Novo produto</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                  </>
                )}

                <SignOutButton>
                  <DropdownMenuItem className="flex space-x-2">
                    <LogOut size={16} strokeWidth={1} />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </SignOutButton>
              </DropdownMenuContent>
            </Dialog>
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
