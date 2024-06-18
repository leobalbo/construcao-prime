'use client'
import { Button } from '@/components/shadcn/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/dialog'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import { useToast } from '@/components/shadcn/use-toast'
import { cn } from '@/lib/utils'
import { LucideLogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { ComponentProps, useState } from 'react'
import { useForm } from 'react-hook-form'

export function DrawerDialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="">
          <LucideLogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex items-center">
          <DialogTitle>Acesse sua Conta</DialogTitle>
          <DialogDescription>
            Digite seu endereço de e-mail para entrar na sua conta.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  )
}

function ProfileForm({ className }: ComponentProps<'form'>) {
  const form = useForm()

  const { toast } = useToast()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false })
      toast({
        title: 'Email envaido',
        description: `Verifique a sua caixa de email em: ${data.email}`,
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar email',
        description: `Erro: ${error}`,
      })
    }
  })
  return (
    <form
      onSubmit={handleSubmit}
      className={cn('grid items-start gap-4', className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...form.register('email')} />
      </div>
      <DialogClose asChild>
        <Button type="submit">Enviar codigo</Button>
      </DialogClose>
    </form>
  )
}
