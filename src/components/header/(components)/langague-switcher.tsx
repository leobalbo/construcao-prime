import { Button } from '@/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { GlobeIcon } from 'lucide-react'

export function LanguageSlector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="hidden lg:inline-flex">
          <GlobeIcon className="h-5 w-5" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg"
              width={24}
              height={24}
              alt="English"
              className="rounded-full"
            />
            <span>English</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg"
              width={24}
              height={24}
              alt="Español"
              className="rounded-full"
            />
            <span>Español</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg"
              width={24}
              height={24}
              alt="Français"
              className="rounded-full"
            />
            <span>Français</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
