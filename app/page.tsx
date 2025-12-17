import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Portal Karyawan
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Selamat datang di sistem internal perusahaan. Silakan masuk untuk mengakses dashboard dan pengumuman.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="/login"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            Masuk (Login)
          </Link>
          
          <Link
            href="/register"
            className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-200 hover:bg-blue-50 transition-all"
          >
            Daftar Akun Baru
          </Link>
        </div>

        <div className="text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} PT Maju Mundur Sukses
        </div>
      </div>
    </div>
  );
}