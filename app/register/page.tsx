import { signup } from '../auth/actions' 
import Link from 'next/link'

export default async function RegisterPage(props: {
  searchParams: Promise<{ error?: string }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-200 to-teal-200">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        {searchParams.error && (
          <div className="mb-4 bg-red-100 text-red-600 p-3 rounded text-sm text-center">
            {searchParams.error}
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
            formAction={signup} 
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Daftar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Sudah punya akun? <Link href="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  )
}