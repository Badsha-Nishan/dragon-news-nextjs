"use client"
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>

        <p className="text-sm opacity-70 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-primary text-white hover:opacity-90 transition"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-base-300 hover:bg-base-200 transition"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* subtle background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-72 h-72 bg-primary blur-3xl rounded-full absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-secondary blur-3xl rounded-full absolute bottom-10 right-10"></div>
      </div>
    </div>
  );
}
