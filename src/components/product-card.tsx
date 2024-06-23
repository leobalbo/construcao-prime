import { Badge } from '@/components/shadcn/badge'
import Image from 'next/image'
import { Product } from '../utils/products-list'

function getBadgeClass(badge: string) {
  const defaultClass = 'absolute left-4 top-4 py-1'
  switch (badge) {
    case 'Novo':
      return `${defaultClass} bg-green-500`
    case 'Promoção':
      return `${defaultClass} bg-red-500`
    default:
      return `${defaultClass} bg-green-500`
  }
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={`/products/${product.id}`}>
      <div
        key={product.id}
        className="relative grid gap-4 overflow-hidden rounded-lg border"
      >
        <div className="group relative">
          <span className="sr-only">{product.name}</span>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="aspect-square w-full object-cover transition-opacity group-hover:opacity-50"
          />
          {product.badge && (
            <Badge className={getBadgeClass(product.badge)}>
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="grid gap-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <h4 className="font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
          <p className="line max-h-12 min-h-12 text-sm text-muted-foreground">
            {product.description}
          </p>
        </div>
      </div>
    </a>
  )
}
