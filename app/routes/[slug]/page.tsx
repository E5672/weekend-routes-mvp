import type React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

type ScenarioStep = { time: string; title: string; subtitle: string };
type Metric = { value: string; label: string };
type PlaceCard = { title: string; meta: string };

type Section = {
  label: string;
  items: string[];
  ordered?: boolean;
};

type RouteData = {
  title: string;
  pretitle?: string;
  description: string;
  params: string;
  heroImage: string;
  badges?: string[];
  metrics?: Metric[];
  scenario?: ScenarioStep[];
  nearby?: PlaceCard[];
  enroute?: PlaceCard[];
  sections: Section[];
};

const routeData: Record<string, RouteData> = {
  "staraya-ladoga": {
    title: "Старая Ладога",
    pretitle: "Поездка на 1 день",
    description: "История, крепость, вода и спокойная поездка, которая перезагружает",
    params: "120 км • 1 день • от 2500 ₽",
    heroImage: "/images/routes/staraya-ladoga/hero.png",
    badges: [
      "Древнейшая крепость в России",
      "Живописные виды на реку Волхов",
      "Идеально для спокойного путешествия",
    ],
    metrics: [
      { value: "120 км", label: "из Петербурга" },
      { value: "1 день", label: "длительность" },
      { value: "от 2500 ₽", label: "на человека" },
    ],
    scenario: [
      { time: "09:00", title: "Выезд из Петербурга", subtitle: "Лучше выехать до 9:00" },
      { time: "11:00", title: "Старая Ладога — крепость", subtitle: "Осмотр древних стен и исторических мест" },
      { time: "13:00", title: "Обед", subtitle: "Уютное кафе с местной кухней" },
      { time: "14:30", title: "Прогулка по берегу Волхова", subtitle: "Живописные виды и тихие тропы" },
      { time: "16:00", title: "Смотровая точка на Волхов", subtitle: "Панорама и фото" },
      { time: "17:30", title: "Возвращение в Петербург", subtitle: "К ужину дома" },
    ],
    nearby: [
      { title: "Смотровая точка на Волхов", meta: "2 км" },
      { title: "Берег Волхова", meta: "1,5 км" },
    ],
    enroute: [
      { title: "Небольшое кафе с домашней кухней", meta: "12 мин" },
      { title: "Локальная ферма с эко-продуктами", meta: "18 мин" },
    ],
    sections: [
      {
        label: "Сценарий дня",
        ordered: true,
        items: [
          "Выезд утром из Петербурга",
          "Прогулка по крепости",
          "Осмотр видовых точек у воды",
          "Обед",
          "Спокойная прогулка по окрестностям",
          "Возвращение вечером",
        ],
      },
      { label: "Рядом есть", items: ["Смотровая точка", "Берег Волхова"] },
      { label: "По дороге можно заехать", items: ["Небольшое кафе", "Локальная ферма"] },
      { label: "Советы", items: ["Удобная обувь", "Взять воду", "Лучше ехать в сухую погоду", "Взять перекус"] },
    ],
  },
  losevo: {
    title: "Лосево",
    description: "Активный отдых, вода и красивые природные точки",
    params: "160 км • 1 день • от 3000 ₽",
    heroImage: "/images/routes/losevo/hero.png",
    metrics: [
      { value: "160 км", label: "из Петербурга" },
      { value: "1 день", label: "длительность" },
      { value: "от 3000 ₽", label: "на человека" },
    ],
    sections: [
      {
        label: "Сценарий дня",
        ordered: true,
        items: ["Ранний выезд", "Прогулка у воды", "Активности", "Обед", "Природные точки", "Возвращение"],
      },
      { label: "Рядом есть", items: ["Берег", "Лесная зона"] },
      { label: "По дороге можно заехать", items: ["Кофейня", "Точка для фото"] },
      { label: "Советы", items: ["Взять ветровку", "Проверить погоду", "Удобно для активного дня"] },
    ],
  },
  "finskiy-zaliv": {
    title: "Финский залив",
    description: "Побережье, закат, прогулка и отдых без перегруза",
    params: "90 км • 1 день • от 2000 ₽",
    heroImage: "/images/routes/finskiy-zaliv/hero.png",
    metrics: [
      { value: "90 км", label: "из Петербурга" },
      { value: "1 день", label: "длительность" },
      { value: "от 2000 ₽", label: "на человека" },
    ],
    sections: [
      {
        label: "Сценарий дня",
        ordered: true,
        items: ["Поздний выезд", "Прогулка вдоль побережья", "Кофе или пикник", "Фото на закате", "Возвращение"],
      },
      { label: "Рядом есть", items: ["Пляж", "Сосновая зона"] },
      { label: "По дороге можно заехать", items: ["Кафе", "Смотровая точка"] },
      { label: "Советы", items: ["Взять плед", "Смотреть ветер", "Хорошо подходит для спокойного отдыха"] },
    ],
  },
};

// ─── theme ───────────────────────────────────────────────────────
const gold = "#D4AF70";
const pageBg = "#0a0905";

const glassCard: React.CSSProperties = {
  background: "rgba(18,16,12,0.78)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "16px",
};

// ─── metric icons ────────────────────────────────────────────────
const IconMetricDistance = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7.5" r="2.2"/>
    <path d="M9 2C6.2 2 4 4.3 4 7.2c0 4.2 5 8.8 5 8.8s5-4.6 5-8.8C14 4.3 11.8 2 9 2z"/>
  </svg>
);
const IconMetricClock = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round">
    <circle cx="9" cy="9" r="6.5"/>
    <path d="M9 5.5V9l2.5 1.8"/>
  </svg>
);
const IconMetricWallet = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="14" height="10" rx="1.8"/>
    <path d="M2 8.5h14"/>
    <path d="M5.5 3.5h7"/>
    <circle cx="13" cy="11.5" r="1" fill={gold} stroke="none"/>
  </svg>
);

const metricIcons = [
  <IconMetricDistance key="d" />,
  <IconMetricClock key="c" />,
  <IconMetricWallet key="w" />,
];

// ─── badge icons ─────────────────────────────────────────────────
const IconBadgeFortress = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 16V9l2-2V4h2v1.5h2V4h2v1.5h2V4h2v3l2 2v7H2z"/>
    <path d="M7 16v-4h4v4"/>
  </svg>
);
const IconBadgeLandscape = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 15L6 7.5l3.5 5 3-4L17 15H1z"/>
    <circle cx="13" cy="5" r="1.8"/>
  </svg>
);
const IconBadgeCompass = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="7"/>
    <path d="M11.5 6.5L10 10l-4 1.5L7.5 8l4-1.5z"/>
    <circle cx="9" cy="9" r="0.8" fill={gold} stroke="none"/>
  </svg>
);

const badgeIcons = [
  <IconBadgeFortress key="fort" />,
  <IconBadgeLandscape key="land" />,
  <IconBadgeCompass key="comp" />,
];

// ─── tip icons ───────────────────────────────────────────────────
const IconTipShoe = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 15.5h14c1 0 2-.5 2-1.5v-1c-2-.5-4-2.5-4-5 0-2-1.5-3.5-3.5-3.5S7 6.5 6.5 8L4 12H2v3.5z"/>
  </svg>
);
const IconTipWater = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 2.5h5a1 1 0 011 1v1h-7v-1a1 1 0 011-1z"/>
    <path d="M6.5 4.5h7l1 1.5v10a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 016 16V6l.5-1.5z"/>
    <path d="M8 11 Q10 13 12 11"/>
  </svg>
);
const IconTipSun = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round">
    <circle cx="10" cy="10" r="3.2"/>
    <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4"/>
  </svg>
);
const IconTipBag = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 7.5h13l-1.5 10h-10l-1.5-10z"/>
    <path d="M7.5 7.5V5.5a2.5 2.5 0 015 0v2"/>
  </svg>
);

const tipIcons = [
  <IconTipShoe key="shoe" />,
  <IconTipWater key="water" />,
  <IconTipSun key="sun" />,
  <IconTipBag key="bag" />,
];

// ─── helpers ─────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: "rgba(255,255,255,0.38)",
      fontSize: "10px",
      fontWeight: 600,
      marginBottom: "16px",
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    }}>
      {children}
    </p>
  );
}

function PlaceCardItem({ card }: { card: PlaceCard }) {
  return (
    <div
      className="relative overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
      style={{ borderRadius: "10px", border: "1px solid rgba(255,255,255,0.07)", aspectRatio: "4/3" }}
    >
      <div className="absolute inset-0" style={{
        background: "linear-gradient(155deg, rgba(55,44,18,0.65) 0%, rgba(8,7,4,0.96) 100%)",
      }}/>
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "12.5px", fontWeight: 500, lineHeight: 1.35 }}>
          {card.title}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px" }}>{card.meta}</span>
          <span style={{ color: gold, fontSize: "12px", opacity: 0.5 }}>→</span>
        </div>
      </div>
    </div>
  );
}

function MetricItem({ metric, icon, divider }: { metric: Metric; icon: React.ReactNode; divider: boolean }) {
  return (
    <div className="flex items-center">
      {divider && (
        <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.13)", flexShrink: 0, margin: "0 18px" }} />
      )}
      <div className="flex items-center gap-2.5">
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          border: `1px solid rgba(212,175,112,0.32)`,
          background: "rgba(212,175,112,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          {icon}
        </div>
        <div>
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 500, lineHeight: 1.2 }}>{metric.value}</p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10.5px", letterSpacing: "0.03em", marginTop: "1px" }}>{metric.label}</p>
        </div>
      </div>
    </div>
  );
}

// ─── page ────────────────────────────────────────────────────────
export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routeData[slug];
  if (!route) notFound();

  const tipsSection = route.sections.find((s) => s.label === "Советы");
  const tips = tipsSection?.items ?? [];
  const fallbackScenario = route.sections.find((s) => s.ordered);

  return (
    <main style={{ background: pageBg, minHeight: "100vh" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "680px" }}>
        <Image src={route.heroImage} alt={route.title} fill className="object-cover object-center" priority />

        {/* left-side gradient — darkens text zone, photo stays bright on the right */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(5,4,2,0.94) 0%, rgba(5,4,2,0.84) 18%, rgba(5,4,2,0.54) 38%, rgba(0,0,0,0.12) 62%, transparent 100%)",
        }} />

        {/* bottom gradient — fades to page background */}
        <div className="absolute inset-x-0 bottom-0" style={{
          height: "54%",
          background: `linear-gradient(to top, ${pageBg} 0%, rgba(10,9,5,0.92) 16%, rgba(10,9,5,0.5) 42%, transparent 100%)`,
        }} />

        {/* ── NAV ── */}
        <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 sm:px-14 py-6">
          <div>
            <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.07em", lineHeight: 1.1 }}>WEEKEND</p>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "11px", letterSpacing: "0.04em" }}>по Петербургу</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Маршруты", "Подбор", "Избранное ♡", "О проекте"].map((link) => (
              <span key={link} style={{ color: "rgba(255,255,255,0.62)", fontSize: "14px", cursor: "default" }}>{link}</span>
            ))}
          </div>
          <button style={{
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "9px 20px",
            color: "rgba(255,255,255,0.62)",
            fontSize: "13px",
            background: "rgba(0,0,0,0.16)",
            backdropFilter: "blur(8px)",
            cursor: "default",
          }}>
            ← к списку маршрутов
          </button>
        </nav>

        {/* ── HERO TEXT — absolute bottom-left ── */}
        <div className="absolute bottom-0 left-0 z-10 px-8 sm:px-14 pb-14 sm:pb-20" style={{ maxWidth: "580px" }}>

          {route.pretitle && (
            <p style={{
              color: gold,
              fontSize: "15px",
              fontStyle: "italic",
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.01em",
              fontWeight: 400,
              marginBottom: "14px",
              opacity: 0.95,
            }}>
              {route.pretitle}
            </p>
          )}

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(52px, 6.5vw, 88px)",
            lineHeight: 1.08,
            letterSpacing: "0.002em",
            fontWeight: 400,
            color: "#ffffff",
            marginBottom: "18px",
            textShadow: "0 2px 40px rgba(0,0,0,0.45)",
          }}>
            {route.title}
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            lineHeight: 1.72,
            maxWidth: "370px",
            marginBottom: "22px",
            fontWeight: 300,
            letterSpacing: "0.012em",
          }}>
            {route.description}
          </p>

          {/* metrics with circle icons and dividers */}
          {route.metrics && (
            <div
              className="flex items-center flex-wrap mb-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.11)", paddingTop: "18px" }}
            >
              {route.metrics.slice(0, 3).map((m, i) => (
                <MetricItem key={i} metric={m} icon={metricIcons[i]} divider={i > 0} />
              ))}
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full font-semibold transition-all active:scale-[0.97] hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #DDB96A 0%, #C49435 100%)",
                color: "#0c0900",
                padding: "14px 32px",
                fontSize: "14px",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 28px rgba(212,175,112,0.38), 0 1px 0 rgba(255,255,255,0.15) inset",
              }}
            >
              Смотреть маршрут →
            </button>
            <button
              className="rounded-full transition-all active:scale-[0.97] hover:brightness-125"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.8)",
                padding: "14px 26px",
                fontSize: "14px",
              }}
            >
              ♡ Сохранить
            </button>
          </div>
        </div>

        {/* ── BADGES — absolute right, vertically centered ── */}
        {route.badges && (
          <div
            className="hidden lg:block absolute z-10"
            style={{ right: "56px", top: "50%", transform: "translateY(-8%)" }}
          >
            <div style={{
              width: "248px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.11)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              background: "rgba(10,8,5,0.6)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.55)",
            }}>
              {route.badges.map((badge, i) => (
                <div
                  key={badge}
                  className="flex items-start gap-3 px-4 py-4"
                  style={{
                    borderBottom: i < route.badges!.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                    background: "rgba(212,175,112,0.1)",
                    border: "1px solid rgba(212,175,112,0.22)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {badgeIcons[i] ?? <span style={{ color: gold, fontSize: "13px" }}>✦</span>}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px", lineHeight: 1.42, paddingTop: "2px" }}>
                    {badge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ══ CONTENT — 3 separate glass cards ══════════════════════ */}
      <div style={{ marginTop: "-56px", position: "relative", zIndex: 10, paddingBottom: "4rem" }}>
        <div
          className="px-4 sm:px-8 lg:px-14"
          style={{ display: "grid", gridTemplateColumns: "3fr 4fr 3fr", gap: "12px" }}
        >

          {/* ── LEFT: Сценарий дня ── */}
          <div style={{ ...glassCard, padding: "28px 24px" }}>
            <SectionLabel>Сценарий дня</SectionLabel>
            <ol className="flex flex-col">
              {(route.scenario ?? fallbackScenario?.items.map((t, i) => ({
                time: `${String(9 + i * 2).padStart(2, "0")}:00`,
                title: t,
                subtitle: "",
              })) ?? []).map((step, i, arr) => (
                <li key={step.time} className="flex gap-3" style={{ paddingBottom: i < arr.length - 1 ? "12px" : "0" }}>
                  {/* number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div style={{
                      width: "24px", height: "24px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #DDB96A 0%, #C49435 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(212,175,112,0.38)",
                    }}>
                      <span style={{ color: "#110d00", fontSize: "10px", fontWeight: 700, lineHeight: 1 }}>{i + 1}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: "1px", flex: 1, minHeight: "16px", background: "rgba(212,175,112,0.22)", margin: "4px 0" }} />
                    )}
                  </div>
                  {/* text */}
                  <div className="flex gap-2.5 flex-1">
                    <span style={{
                      color: "rgba(255,255,255,0.36)",
                      fontSize: "11px",
                      fontWeight: 500,
                      flexShrink: 0,
                      paddingTop: "4px",
                      minWidth: "38px",
                      fontVariantNumeric: "tabular-nums",
                    }}>
                      {step.time}
                    </span>
                    <div>
                      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 500, lineHeight: 1.4, paddingTop: "2px" }}>
                        {step.title}
                      </p>
                      {step.subtitle && (
                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11.5px", marginTop: "2px", lineHeight: 1.4 }}>
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── MIDDLE: Рядом + По дороге + compact tips ── */}
          <div style={{ ...glassCard, padding: "28px 24px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div>
              <SectionLabel>Рядом есть</SectionLabel>
              <div className="grid grid-cols-2 gap-2.5">
                {(route.nearby ?? route.sections.find((s) => s.label === "Рядом есть")?.items.map((t) => ({ title: t, meta: "~2 км" })) ?? []).map((card) => (
                  <PlaceCardItem key={card.title} card={card} />
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>По дороге можно заехать</SectionLabel>
              <div className="grid grid-cols-2 gap-2.5">
                {(route.enroute ?? route.sections.find((s) => s.label === "По дороге можно заехать")?.items.map((t) => ({ title: t, meta: "~15 мин" })) ?? []).map((card) => (
                  <PlaceCardItem key={card.title} card={card} />
                ))}
              </div>
            </div>

            {/* compact tips row */}
            {tips.length > 0 && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "20px" }}>
                <SectionLabel>Советы</SectionLabel>
                <div className="grid grid-cols-4 gap-2">
                  {tips.slice(0, 4).map((tip, i) => {
                    const short = tip.split(" ").slice(0, 2).join(" ");
                    return (
                      <div key={tip} className="flex flex-col items-center gap-2 text-center">
                        <div style={{
                          width: "38px", height: "38px", borderRadius: "10px",
                          background: "rgba(212,175,112,0.09)",
                          border: "1px solid rgba(212,175,112,0.18)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          {tipIcons[i] ?? <span style={{ color: gold, fontSize: "13px" }}>✦</span>}
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "10.5px", lineHeight: 1.35 }}>{short}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Советы full ── */}
          <div style={{ ...glassCard, padding: "28px 24px" }}>
            <SectionLabel>Советы</SectionLabel>
            <div className="flex flex-col gap-5">
              {tips.map((tip, i) => {
                const words = tip.split(" ");
                const title = words.slice(0, 2).join(" ");
                const subtitle = words.slice(2).join(" ");
                return (
                  <div key={tip} className="flex gap-3 items-start">
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                      background: "rgba(212,175,112,0.09)",
                      border: "1px solid rgba(212,175,112,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {tipIcons[i] ?? <span style={{ color: gold, fontSize: "11px" }}>✦</span>}
                    </div>
                    <div>
                      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 500, lineHeight: 1.35 }}>{title}</p>
                      {subtitle && (
                        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "12px", marginTop: "2px", lineHeight: 1.4 }}>{subtitle}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
