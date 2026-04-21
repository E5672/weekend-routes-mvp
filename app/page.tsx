import Link from "next/link";

const chips = ["У воды", "С детьми", "Романтик", "Активный отдых"];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col items-center text-center gap-4 max-w-sm w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          Куда поехать на выходные
        </h1>
        <p className="text-base sm:text-lg text-slate-500">
          Подберём маршрут под тебя за 1 минуту
        </p>

        <Link
          href="/filter"
          className="mt-4 w-full sm:w-auto px-10 py-4 rounded-full bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 active:scale-95 transition-all shadow-md text-center"
        >
          Найти маршрут
        </Link>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {chips.map((label) => (
            <button
              key={label}
              className="px-5 py-2 rounded-full border border-slate-300 text-slate-600 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
