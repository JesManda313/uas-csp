import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar' 

export default async function Dashboard() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: announcements } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userEmail={user.email || 'User'} />

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Announcement</h1>
          <span className="text-sm text-gray-500 font-medium bg-white px-3 py-1 rounded-full border shadow-sm">
            {announcements?.length || 0} Newest Info
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements?.map((item) => (
            <div key={item.id} className="bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    Info
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 text-right">
                  Diterbitkan oleh Admin
                </p>
              </div>
            </div>
          ))}

          {(!announcements || announcements.length === 0) && (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
               <p className="text-gray-500">Belum ada pengumuman.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}