import Link from "next/link";

const sections = [
  {
    label: "Длительность",
    options: ["1 день", "2 дня", "Уикенд"],
  },
  {
    label: "С кем",
    options: ["Один", "С детьми", "Вдвоём", "Компанией", "С собакой"],
  },
  {
    label: "Транспорт",
    options: ["Авто", "Общественный", "Каршеринг"],
  },
  {
    label: "Интересы",
    options: ["Лес", "Вода", "Пляж", "Болото", "Скалы", "История", "Пещеры", "Рыбалка", "Лошади"],
  },
];

export default function FilterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-32">
      <div className="max-w-sm mx-auto px-6 pt-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          Подбор маршрута
        </h1>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {section.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.options.map((option) => (
                  <button
                    key={option}
                    className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-white/80 backdrop-blur-sm border-t border-slate-100">
        <div className="max-w-sm mx-auto">
          <Link
            href="/routes"
            className="block w-full py-4 rounded-full bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 active:scale-95 transition-all shadow-md text-center"
          >
            Показать маршруты
          </Link>
        </div>
      </div>
    </main>
  );
}
