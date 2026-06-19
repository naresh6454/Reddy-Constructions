export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 animate-pulse">
      {/* PageHero skeleton */}
      <div className="bg-gradient-to-br from-[#0A3D91] via-[#072d6a] to-[#051f4d] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-3 bg-white/20 rounded-full w-20 mb-5" />
          <div className="h-9 bg-white/25 rounded-xl w-2/3 mb-4" />
          <div className="h-4 bg-white/15 rounded-full w-1/2 mb-2" />
          <div className="h-4 bg-white/10 rounded-full w-5/12" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-24 mb-4" />
        <div className="h-7 bg-slate-200 dark:bg-slate-700 rounded-xl w-1/3 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-52" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A3D91] via-[#072d6a] to-[#051f4d] animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="h-3 bg-white/20 rounded-full w-48 mb-6" />
        <div className="h-12 bg-white/25 rounded-xl w-3/4 mb-4" />
        <div className="h-12 bg-white/20 rounded-xl w-1/2 mb-6" />
        <div className="h-4 bg-white/15 rounded-full w-2/3 mb-2" />
        <div className="h-4 bg-white/10 rounded-full w-1/2 mb-10" />
        <div className="flex gap-4">
          <div className="h-12 w-40 bg-[#F4B400]/40 rounded-full" />
          <div className="h-12 w-36 bg-white/15 rounded-full" />
        </div>
      </div>
    </div>
  );
}
