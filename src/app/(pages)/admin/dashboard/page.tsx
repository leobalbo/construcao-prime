import { clerkClient } from '@clerk/nextjs/server'
import { setRole } from './_actions'
import { SearchUsers } from './_search-users'

export default async function AdminDashboardPage(params: {
  searchParams: { search?: string }
}) {
  const query = params.searchParams.search

  const users = query
    ? (await clerkClient.users.getUserList({ query })).data
    : []

  return (
    <>
      <SearchUsers />

      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId,
                )?.emailAddress
              }
            </div>
            <div>{user.publicMetadata.role as string}</div>
            <div>
              <form action={setRole}>
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button type="submit">Tornar admin</button>
              </form>
            </div>
            <div>
              <form action={setRole}>
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="moderator" name="role" />
                <button type="submit">Tornar moderador</button>
              </form>
            </div>
            <div>
              <form action={setRole}>
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="member" name="role" />
                <button type="submit">Tornar membro</button>
              </form>
            </div>
          </div>
        )
      })}
    </>
  )
}
