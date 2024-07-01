import { Button } from '@/components/shadcn/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn/dialog'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'

export function UserSettingsDialog() {
  return (
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle>Perfil</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input type="fullName" placeholder="aa" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            E-mail
          </Label>
          <Input type="email" placeholder="aaa" className="col-span-3" />
        </div>
      </div>

      <DialogFooter>
        <Button type="submit">Salvar</Button>
      </DialogFooter>
    </DialogContent>
  )
}
