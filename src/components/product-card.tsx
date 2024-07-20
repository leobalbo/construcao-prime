import { Badge } from '@/components/shadcn/badge'
import { Product } from '@/types/product'
import Image from 'next/image'

function getBadgeClass(badge: string) {
  const defaultClass = 'absolute left-4 top-4 py-1'
  switch (badge) {
    case 'Novo':
      return `${defaultClass} bg-emerald-500`
    case 'Promoção':
      return `${defaultClass} bg-rose-500`
    default:
      return `${defaultClass} bg-slate-500`
  }
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({
  product: { id, slug, title, image, badge, price, description },
}: ProductCardProps) {
  return (
    <a href={`/products/${slug}`}>
      <div
        key={id}
        className="relative grid gap-4 overflow-hidden rounded-lg border"
      >
        <div className="group relative">
          <span className="sr-only">{title}</span>
          <Image
            src={image}
            alt={slug}
            width={200}
            height={200}
            className="aspect-square w-full object-cover transition-opacity group-hover:opacity-50"
          />
          {badge && <Badge className={getBadgeClass(badge)}>{badge}</Badge>}
        </div>
        <div className="grid gap-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <h4 className="font-semibold">
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
          <p className="line max-h-12 min-h-12 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}
