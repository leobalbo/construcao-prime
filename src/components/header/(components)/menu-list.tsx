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
          href: '#',
          label: 'Produto',
          icon: Package,
        },
        {
          href: '#',
          label: 'Sobre-nós',
          icon: Book,
        },
        {
          href: '#',
          label: 'Contato',
          icon: PhoneCall,
        },
        {
          href: '#',
          label: 'Rastrear',
          icon: Truck,
        },
      ],
    },
  ]
}
