import Link from "next/link";

const routes = [
  {
    id: 1,
    slug: "staraya-ladoga",
    title: "Старая Ладога",
    description: "История, крепость, вода и спокойная поездка на 1 день",
    params: "120 км • 1 день • от 2500 ₽",
  },
  {
    id: 2,
    slug: "losevo",
    title: "Лосево",
    description: "Активный отдых, вода и красивые природные точки",
    params: "160 км • 1 день • от 3000 ₽",
  },
  {
    id: 3,
    slug: "finskiy-zaliv",
    title: "Финский залив",
    description: "Побережье, закат, прогулка и отдых без перегруза",
    params: "90 км • 1 день • от 2000 ₽",
  },
];

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 pt-12 pb-16">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Маршруты на выходные
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-500">
          Подобранные варианты для короткой поездки
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="w-full aspect-video bg-slate-200" />

              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  {route.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                  {route.description}
                </p>
                <p className="mt-3 text-xs font-medium text-slate-400 tracking-wide">
                  {route.params}
                </p>
                <Link
                  href={`/routes/${route.slug}`}
                  className="mt-4 block w-full py-3 rounded-full border border-indigo-500 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 active:scale-95 transition-all text-center"
                >
                  Смотреть маршрут
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
