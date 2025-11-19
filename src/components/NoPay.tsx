export default function NoPay() {
  return (
    <section className="py-2 bg-gradient-to-l from-emerald-50 via-blue-50/40 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-l from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
            לא מקבלים — לא משלמים
          </h2>
        </div>
        <p className="text-center text-slate-600 text-base md:text-lg mt-2 font-medium">
          אנחנו מקבלים תשלום רק אם אתם מקבלים החזר
        </p>
      </div>
    </section>
  );
}
