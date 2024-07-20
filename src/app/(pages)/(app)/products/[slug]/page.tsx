import { Button } from '@/components/shadcn/button'
import { Label } from '@/components/shadcn/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'
import { api } from '@/lib/api-product'
import { Product } from '@/types/product'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // a cada uma hora o cache é atualizado
    },
  })

  const products = await response.json()

  return products
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <>
      {product.id ? (
        <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
          <div className="grid items-start gap-4 md:gap-10">
            <Image
              src={product.image}
              alt={product.slug}
              width={1000}
              height={1000}
              quality={100}
              className="aspect-square w-full overflow-hidden rounded-lg border object-cover"
            />
          </div>

          <div className="grid items-start gap-4 md:gap-10">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold lg:text-4xl">
                {product.title}
              </h1>

              <div>
                <p>{product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </div>
            </div>
            <form className="grid gap-4 md:gap-10">
              <div className="grid gap-2">
                <Label htmlFor="quantity" className="text-base">
                  Quantia
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                size="lg"
                className="bg-[#111] text-white hover:bg-[#333]"
              >
                Adicionar ao carrinho
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <h1>Produto não encontrado</h1>
          <Link href="/products" className="flex gap-2" replace={true}>
            <ChevronLeft />
            Voltar
          </Link>
        </div>
      )}
    </>
  )
}
