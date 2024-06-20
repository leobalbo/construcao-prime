import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function Page() {
  if (!checkRole('admin')) {
    redirect('/')
  }
  return <h1>Ola</h1>
}
