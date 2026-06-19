export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="bg-brand-blue pt-24 pb-8">
        <div className="container-custom">
          <div className="h-4 w-40 bg-white/20 rounded-full mb-4" />
          <div className="h-10 w-80 bg-white/20 rounded-xl mb-3" />
          <div className="h-4 w-52 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="h-[500px] bg-slate-200 rounded-3xl" />
          <div className="space-y-4">
            <div className="h-24 bg-slate-200 rounded-2xl" />
            <div className="h-48 bg-slate-200 rounded-2xl" />
            <div className="h-36 bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
