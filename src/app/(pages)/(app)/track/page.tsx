import { Label } from '@/components/shadcn/label'
import { Input } from '@/components/shadcn/input'
import { Button } from '@/components/shadcn/button'
import { Progress } from '@/components/shadcn/progress'
import { Laugh, PackageCheck, PackageOpen, Truck } from 'lucide-react'

export default function Component() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Acompanhe seu pedido
          </h1>
          <p className="mt-4 text-muted-foreground">
            Insira o numero do seu pedido para acompanhar o seu pedido.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="orderNumber">Número do pedido</Label>
            <Input
              id="orderNumber"
              type="text"
              placeholder="Insira o número de rastreamento"
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Rastrear Pedido
          </Button>
        </form>
        <div className="space-y-4 rounded-lg bg-muted p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Progresso da entrega</h2>
            <Progress value={70} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <PackageOpen className="size-5 text-emerald-600" />
                <span>Preparando o produto</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck className="size-5 text-emerald-600" />
                <span>Postado</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="size-5 text-primary" />
                <span>Em trânsito</span>
              </div>
              <div className="flex items-center gap-2">
                <Laugh className="size-5 text-muted-foreground" />
                <span>Entregue</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Detalhes do pedido</h2>
            <div className="flex flex-col space-y-2">
              <div>
                <span className="font-semibold">Numero do Pedido: </span>
                12345
              </div>
              <div>
                <span className="font-semibold">Enviado por :</span> Construção
                Prime
              </div>
              <div>
                <span className="font-semibold">Enviado para :</span> Rua 1 -
                123, Marília - SP | João Paulo
              </div>
              <div>
                <span className="font-semibold">Produtos:</span> 2 produtos
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Histórico de rastreamento</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <PackageOpen className="size-5 text-emerald-600" />
                <span>10 de junho de 2024 - Preparando pedido</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <PackageCheck className="size-5 text-emerald-600" />
                <span>10 de junho de 2024 - Pedido postado</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="size-5 text-foreground" />
                <span>11 de junho de 2024 – Em trânsito</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Laugh className="size-5" />
                <span>12 de junho de 2024 – Entrega prevista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
