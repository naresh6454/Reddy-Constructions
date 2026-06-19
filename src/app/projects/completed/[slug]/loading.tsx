export default function Loading() {
  return (
    <>
      {/* Top bar skeleton */}
      <div className="bg-brand-blue pt-24 pb-8">
        <div className="container-custom">
          <div className="h-4 w-44 bg-white/20 rounded-full mb-5 animate-pulse" />
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-24 bg-white/20 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-white/20 rounded-full animate-pulse" />
          </div>
          <div className="h-10 w-80 bg-white/20 rounded-xl animate-pulse mb-3" />
          <div className="h-4 w-40 bg-white/15 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image skeleton */}
            <div className="rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-700 h-[500px] animate-pulse" />

            {/* Details skeleton */}
            <div className="space-y-6">
              {/* Specs card */}
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 border border-slate-100 dark:border-slate-600">
                <div className="h-5 w-36 bg-slate-200 dark:bg-slate-600 rounded-lg animate-pulse mb-5" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-3 bg-slate-50 dark:bg-slate-600 rounded-xl animate-pulse">
                      <div className="h-3 w-16 bg-slate-200 dark:bg-slate-500 rounded mb-2" />
                      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-500 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description card */}
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 border border-slate-100 dark:border-slate-600">
                <div className="h-5 w-40 bg-slate-200 dark:bg-slate-600 rounded-lg animate-pulse mb-3" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-600 rounded animate-pulse" />
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-600 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-slate-100 dark:bg-slate-600 rounded animate-pulse" />
                </div>
              </div>

              {/* Features card */}
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 border border-slate-100 dark:border-slate-600">
                <div className="h-5 w-36 bg-slate-200 dark:bg-slate-600 rounded-lg animate-pulse mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-100 dark:border-slate-600 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-500 flex-shrink-0" />
                      <div className="h-3 bg-slate-100 dark:bg-slate-600 rounded animate-pulse" style={{ width: `${60 + (i * 8) % 30}%` }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button skeleton */}
              <div className="h-14 bg-brand-yellow/40 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
