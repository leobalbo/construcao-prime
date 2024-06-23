'use client'
import ProductCard from '@/components/product-card'
import { Button } from '@/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { getCategorys } from '@/utils/category-list'
import { Product, getProductsList } from '@/utils/products-list'
import { ArrowUp, Filter } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Component() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const categoryList = getCategorys()
  const products: Product[] = getProductsList(category || '')

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex w-full flex-row-reverse">
      <section className="w-full py-12">
        <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Nossos Produtos
              </h1>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="flex items-center gap-4 md:ml-auto">
              <Button variant="outline" className="shrink-0">
                Carrinho (0)
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="shrink-0">
                    <Filter className="mr-2 h-4 w-4" />
                    {category === null ? 'Todos' : category}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <Link href="/products">
                    <DropdownMenuItem>Todos</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  {categoryList.map((category) => (
                    <Link
                      href={`/products?category=${category}`}
                      key={category}
                    >
                      <DropdownMenuItem>{category}</DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 bg-background shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Voltar ao Topo</span>
        </Button>
      </section>
    </div>
  )
}
