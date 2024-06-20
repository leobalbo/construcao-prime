'use client'

import { Avatar, AvatarImage } from '@/components/shadcn/avatar'
import {
  Cog,
  CreditCard,
  LogOut,
  LucideFileBarChart2,
  LucidePackagePlus,
  LucideTruck,
  UserRound,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'

import { useClerk } from '@clerk/nextjs'

interface UserInfoProps {
  image: string
  name: string
  email: string
  admin: boolean
}

export function UserInfo(props: UserInfoProps) {
  const { signOut } = useClerk()
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="">
            <AvatarImage src={props.image} alt="Avatar" />
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {props.name}
            <span className="text-xs font-light text-zinc-500">
              {props.email}
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

          {props.admin && (
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

          <DropdownMenuItem
            onClick={() => signOut()}
            className="flex space-x-2"
          >
            <LogOut size={16} strokeWidth={1} />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
