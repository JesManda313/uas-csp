import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { signout } from '../auth/actions' 

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: announcements } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-300 to-teal-400 shadow p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-800">Employee</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{user.email}</span>
          <form action={signout}>
            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">
              Logout
            </button>
          </form>
        </div>
      </nav>
      <main className="p-8 w-full mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Pengumuman Terbaru</h2>

        <div className="grid gap-4">
          {announcements?.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.content}</p>
              <p className="text-xs text-gray-400 mt-4">
                Diposting pada: {new Date(item.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}

          {(!announcements || announcements.length === 0) && (
            <p className='text-gray-400'>Tidak ada pengumuman saat ini.</p>
          )}
        </div>
      </main>
    </div>
  )
}