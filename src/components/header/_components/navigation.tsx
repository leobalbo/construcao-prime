'use client'

import { Book, LucideTruck, Package, UserRound } from 'lucide-react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row items-center space-x-8">
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} space-x-2`}
            >
              <Package size={16} strokeWidth={1} />
              <span>Produtos</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} space-x-2`}
            >
              <Book size={16} strokeWidth={1} />
              <span>Sobre-nós</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} space-x-2`}
            >
              <UserRound size={16} strokeWidth={1} />
              <span>Contato</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/track" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} space-x-2`}
            >
              <LucideTruck size={16} strokeWidth={1} />
              <span>Rastrear</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
