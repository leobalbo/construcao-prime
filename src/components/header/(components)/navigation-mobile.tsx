'use client'
import { LogoLinkSVG } from '@/components/logo'
import { Button } from '@/components/shadcn/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/shadcn/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn/sheet'
import { Menu, Package } from 'lucide-react'
import Link from 'next/link'
import { ReactElement } from 'react'

type MenuItemProps = {
  href: string
  name: string
  icon: ReactElement
}

function MenuItem(props: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <Link
        href={props.href}
        className="flex w-full items-center py-2 text-lg font-semibold"
        prefetch={false}
      >
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-0`}>
          {props.icon}
          {props.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu de navegação</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="h-full w-full">
        <LogoLinkSVG />

        <NavigationMenu>
          <NavigationMenuList className="grid gap-2 py-6">
            <MenuItem
              href="#"
              name="Produto"
              icon={
                <Package size={16} strokeWidth={1} className="mr-2 h-4 w-4" />
              }
            />

            <MenuItem
              href="#"
              name="Produto"
              icon={
                <Package size={16} strokeWidth={1} className="mr-2 h-4 w-4" />
              }
            />
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
