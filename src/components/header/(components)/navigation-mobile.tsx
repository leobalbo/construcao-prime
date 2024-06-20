'use client'

import { Button } from '@/components/shadcn/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn/sheet'
import { LogoSVG } from '@/components/utils/logo'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { getMenuList } from './menu-list'

type MenuItemProps = {
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

export function NavMobile() {
  const menuGroups = getMenuList()

  return (
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
  )
}
