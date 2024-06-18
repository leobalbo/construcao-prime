'use client'

import { Avatar, AvatarImage } from '@/components/shadcn/avatar'
import {
  Cog,
  CreditCard,
  LogOut,
  LucideFileBarChart2,
  LucidePackagePlus,
  LucidePencilRuler,
  LucideTruck,
  LucideUserCog2,
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

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type Props = {
  user: Session['user']
}

export function UserInfo({ user }: Props) {
  if (!user) return
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="">
          <AvatarImage
            src="https://media.discordapp.net/attachments/1103860390967918623/1251473411868196897/7879707ad2543f57395f3a9f42fd4090.png?ex=666eb4f0&is=666d6370&hm=cc6739d3aec06265efcfd400a4c0b9daddd8e7609701254afde1a578b4c3e893&=&format=webp&quality=lossless"
            alt="Avatar"
          />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.name ?? 'Sua Conta'}</DropdownMenuLabel>

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

        {/* Fazer parte de permissao */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex space-x-2">
            <LucidePackagePlus size={16} strokeWidth={1} />
            <span>Novo produto</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex space-x-2">
            <LucideFileBarChart2 size={16} strokeWidth={1} />
            <span>Painel Admin</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex space-x-2">
            <LucidePencilRuler size={16} strokeWidth={1} />
            <span>Editar Layout</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex space-x-2">
            <LucideUserCog2 size={16} strokeWidth={1} />
            <span>Controle de Usuários</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()} className="flex space-x-2">
          <LogOut size={16} strokeWidth={1} />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
