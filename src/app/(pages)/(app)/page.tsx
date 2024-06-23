import { Button } from '@/components/shadcn/button'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Netflix',
  'YouTube',
  'Instagram',
  'Uber',
  'Spotify',
]

export default function Page() {
  return (
    <div>
      <div className="shrink-1 w-full items-center px-4 md:px-6 lg:px-16">
        <div className="grid justify-between py-20 lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-5xl font-light xl:text-6xl">
              Construção Prime
            </h1>
            <p className="mb-8 mt-8 text-[1.2rem] font-light text-muted-foreground md:text-2xl xl:text-3xl">
              Construções Prime, fundada por Miguel, <br /> é uma empresa líder
              na indústria da construção, <br />
              focada em qualidade e excelência.
            </p>
            <a href="/products">
              <Button variant="gooeyRight" className="flex px-16 py-8">
                <ShoppingBag strokeWidth="1" size={16} className="mr-2" />
                Compre Agora
              </Button>
            </a>
          </div>

          <div className="mt-10 lg:col-span-4 lg:ml-auto lg:mt-0">
            <Image
              src="https://generated.vusercontent.net/placeholder.svg"
              alt="Construction Image"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
        </div>
        <div className="mt-10 grid place-content-center justify-center py-2 lg:col-span-4 lg:ml-auto lg:mt-0">
          <section id="companies">
            <div className="py-14">
              <div className="container mx-auto px-4 md:px-8">
                <h3 className="text-center text-sm font-semibold text-gray-500">
                  NOSSOS PARCEIROS COLABORADORES
                </h3>
                <div className="relative mt-6">
                  <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
                    {companies.map((logo, idx) => (
                      <Image
                        key={idx}
                        src={`https://cdn.magicui.design/companies/${logo}.svg`}
                        width={500}
                        height={500}
                        className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                        alt={logo}
                      />
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
