import { Book, Package, PhoneCall, Truck } from 'lucide-react'

type Menu = {
  href: string
  label: string
  icon: any
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/products',
          label: 'Produto',
          icon: Package,
        },
        {
          href: '/about',
          label: 'Sobre-nós',
          icon: Book,
        },
        {
          href: '/contact',
          label: 'Contato',
          icon: PhoneCall,
        },
        {
          href: '/track',
          label: 'Rastrear',
          icon: Truck,
        },
      ],
    },
  ]
}
