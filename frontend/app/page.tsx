export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Main Container - Full Width */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Vibe Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing products with our modern, responsive dashboard
          </p>
        </header>

        {/* Content Area - Wider Layout */}
        <main className="w-full max-w-[1400px] mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/20">
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-8 shadow-lg">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                Layout Ready
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Beautiful gradient background with glassmorphism design ✨
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
