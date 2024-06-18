'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/shadcn/navigation-menu'
import { BookOpenTextIcon, Package, PhoneCallIcon, Truck } from 'lucide-react'
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
        legacyBehavior
        passHref
        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium disabled:pointer-events-none"
        prefetch={false}
      >
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
          {props.icon}
          {props.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export function NavigationDesktop() {
  return (
    <NavigationMenu className="hidden space-x-2 lg:flex">
      <NavigationMenuList>
        <MenuItem
          href="#"
          name="Produto"
          icon={<Package size={16} strokeWidth={1} className="mr-2 h-4 w-4" />}
        />
        <MenuItem
          href="#"
          name="Sobre-nós"
          icon={
            <BookOpenTextIcon
              size={16}
              strokeWidth={1}
              className="mr-2 h-4 w-4"
            />
          }
        />
        <MenuItem
          href="#"
          name="Contato"
          icon={
            <PhoneCallIcon size={16} strokeWidth={1} className="mr-2 h-4 w-4" />
          }
        />
        <MenuItem
          href="#"
          name="Rastrear"
          icon={<Truck size={16} strokeWidth={1} className="mr-2 h-4 w-4" />}
        />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
