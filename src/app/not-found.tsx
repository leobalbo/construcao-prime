import NotFoundTemplate from '@/components/not-found-template'
import { OctagonAlert } from 'lucide-react'

export default function NotFound() {
  return (
    <NotFoundTemplate
      href="/"
      title="Página não encontrada"
      description="Lamentamos, mas não conseguimos encontrar a página que você está procurando."
      buttonText="Retornar a página inicial"
      icon={<OctagonAlert size={48} className="mx-auto text-primary" />}
    />
  )
}
