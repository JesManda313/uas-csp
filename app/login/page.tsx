import { login } from '../auth/actions'
import Link from 'next/link'

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string, message?: string }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 rounded-b-4xl bg-gradient-to-b from-blue-200 to-teal-200">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {searchParams.error && (
          <div className="mb-4 bg-red-100 text-red-600 p-3 rounded text-sm text-center">
            {searchParams.error}
          </div>
        )}

        {searchParams.message && (
          <div className="mb-4 bg-green-100 text-green-800 p-3 rounded text-sm text-center">
            {searchParams.message}
          </div>
        )}

        <form className="space-y-4">
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required 
            className="w-full border p-2 rounded text-gray-800" 
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full border p-2 rounded text-gray-800" 
          />
          
          <button 
            formAction={login} 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 "
          >
            Masuk
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Belum punya akun? <Link href="/register" className="text-blue-600">Daftar</Link>
        </p>
      </div>
    </div>
  )
}