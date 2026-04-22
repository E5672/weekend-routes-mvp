import type React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import PlaceCardsSection from "./PlaceCardsSection";

type ScenarioStep = { time: string; title: string; subtitle: string };
type Metric = { value: string; label: string };
type PlaceCard = { title: string; meta: string; image?: string };
type Section = { label: string; items: string[]; ordered?: boolean };
type RouteFact = { label: string; value: string };

type RouteData = {
  title: string;
  pretitle?: string;
  description: string;
  heroImage: string;
  badges?: string[];
  metrics?: Metric[];
  scenario?: ScenarioStep[];
  nearby?: PlaceCard[];
  enroute?: PlaceCard[];
  sections: Section[];
  facts?: RouteFact[];
};

const routeData: Record<string, RouteData> = {
  "staraya-ladoga": {
    title: "Старая Ладога",
    pretitle: "Поездка на 1 день",
    description: "История, крепость, вода и спокойная поездка, которая перезагружает",
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
      { time: "11:00", title: "Старая Ладога — крепость", subtitle: "Осмотр древних стен" },
      { time: "13:00", title: "Обед", subtitle: "Уютное кафе с местной кухней" },
      { time: "14:30", title: "Прогулка по берегу Волхова", subtitle: "Живописные виды" },
      { time: "16:00", title: "Смотровая точка на Волхов", subtitle: "Панорама и фото" },
      { time: "17:30", title: "Возвращение в Петербург", subtitle: "К ужину дома" },
    ],
    nearby: [
      { title: "Смотровая точка на Волхов", meta: "2 км", image: "/images/routes/staraya-ladoga/volkhov-view/cover.jpg" },
      { title: "Кафе с домашней кухней", meta: "12 мин", image: "/images/routes/staraya-ladoga/home-cafe/cover.jpg" },
    ],
    enroute: [
      { title: "Курган Вещего Олега", meta: "5 мин", image: "/images/routes/staraya-ladoga/oleg-mound/cover.jpg" },
      { title: "Старая Ладожская пещера", meta: "10 мин", image: "/images/routes/staraya-ladoga/ladoga-cave/cover.jpg" },
    ],
    facts: [
      { label: "Когда ехать", value: "Май — Октябрь" },
      { label: "Как добраться", value: "Автомобиль · 1,5 ч" },
      { label: "Сложность", value: "Лёгкая прогулка" },
    ],
    sections: [
      { label: "Советы", items: ["Удобная обувь", "Взять воду", "Лучше в сухую погоду", "Взять перекус"] },
    ],
  },
  losevo: {
    title: "Лосево",
    pretitle: "Активный день у воды",
    description: "Активный отдых, вода и красивые природные точки",
    heroImage: "/images/routes/losevo/hero.png",
    metrics: [
      { value: "160 км", label: "из Петербурга" },
      { value: "1 день", label: "длительность" },
      { value: "от 3000 ₽", label: "на человека" },
    ],
    scenario: [
      { time: "08:00", title: "Ранний выезд", subtitle: "Хорошая дорога" },
      { time: "10:00", title: "Прогулка у воды", subtitle: "Живописный берег" },
      { time: "12:00", title: "Активности", subtitle: "Сплав или прогулка" },
      { time: "14:00", title: "Обед", subtitle: "Местное кафе" },
      { time: "16:00", title: "Природные точки", subtitle: "Скалы и виды" },
      { time: "18:00", title: "Возвращение", subtitle: "Вечером дома" },
    ],
    nearby: [
      { title: "Берег реки Вуоксы", meta: "0,5 км" },
      { title: "Лесная зона", meta: "1 км" },
    ],
    enroute: [
      { title: "Кофейня у трассы", meta: "8 мин" },
      { title: "Смотровая точка", meta: "20 мин" },
    ],
    facts: [
      { label: "Когда ехать", value: "Июнь — Август" },
      { label: "Как добраться", value: "Автомобиль · 2 ч" },
      { label: "Сложность", value: "Средняя" },
    ],
    sections: [
      { label: "Советы", items: ["Взять ветровку", "Проверить погоду", "Удобная обувь", "Взять перекус"] },
    ],
  },
  "finskiy-zaliv": {
    title: "Финский залив",
    pretitle: "Вечер у воды",
    description: "Побережье, закат, прогулка и отдых без перегруза",
    heroImage: "/images/routes/finskiy-zaliv/hero.png",
    metrics: [
      { value: "90 км", label: "из Петербурга" },
      { value: "1 день", label: "длительность" },
      { value: "от 2000 ₽", label: "на человека" },
    ],
    scenario: [
      { time: "14:00", title: "Поздний выезд", subtitle: "Без спешки" },
      { time: "15:30", title: "Прогулка по берегу", subtitle: "Сосновый лес" },
      { time: "17:00", title: "Кофе или пикник", subtitle: "Прямо у воды" },
      { time: "19:00", title: "Закат", subtitle: "Лучшее время для фото" },
      { time: "20:30", title: "Возвращение", subtitle: "К ужину в городе" },
    ],
    nearby: [
      { title: "Пляж залива", meta: "0,3 км" },
      { title: "Сосновая зона", meta: "1 км" },
    ],
    enroute: [
      { title: "Кафе с видом", meta: "5 мин" },
      { title: "Смотровая", meta: "15 мин" },
    ],
    facts: [
      { label: "Когда ехать", value: "Апрель — Сентябрь" },
      { label: "Как добраться", value: "Авто или электричка" },
      { label: "Сложность", value: "Очень лёгкая" },
    ],
    sections: [
      { label: "Советы", items: ["Взять плед", "Смотреть ветер", "Романтично вдвоём", "Взять фотик"] },
    ],
  },
};

// ─── tokens ──────────────────────────────────────────────────────
const gold = "#D4AF70";

// ─── glass card ──────────────────────────────────────────────────
const glassCard: React.CSSProperties = {
  background: "rgba(15,13,9,0.74)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(212,175,112,0.14)",
  borderRadius: "26px",
  boxShadow: "0 22px 70px rgba(0,0,0,0.42), inset 0 1px 0 rgba(212,175,112,0.08)",
};

// ─── metric icons ─────────────────────────────────────────────────
const IconDistance = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 5.5 5 5.5 8.5c0 5.5 6.5 13.5 6.5 13.5s6.5-8 6.5-13.5C18.5 5 15.5 2 12 2z"/>
    <circle cx="12" cy="8.5" r="2.2"/>
  </svg>
);
const IconDuration = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round">
    <circle cx="12" cy="12" r="8.5"/>
    <path d="M12 7v5l3 2.2"/>
  </svg>
);
const IconCost = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6.5" width="18" height="13" rx="2.2"/>
    <path d="M3 11h18M7.5 4.5h9"/>
    <circle cx="17" cy="15" r="1.4" fill={gold} stroke="none"/>
  </svg>
);
const metricIcons = [<IconDistance key="d" />, <IconDuration key="t" />, <IconCost key="c" />];

// ─── badge icons ──────────────────────────────────────────────────
const IconFortress = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20V11l2.5-2.5V5h2v2h3V5h2v2h3V5h2v3.5L20 11v9H3z"/>
    <path d="M8.5 20v-5h5v5"/>
  </svg>
);
const IconLandscape = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 18L7 9l4.5 6 4-5.5L21 18H1z"/>
    <circle cx="16" cy="6" r="2.2"/>
  </svg>
);
const IconCompass = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8.5"/>
    <path d="M14 8l-2.5 5.5-5.5 2.5 2.5-5.5 5.5-2.5z"/>
    <circle cx="11" cy="11" r="1" fill={gold} stroke="none"/>
  </svg>
);
const badgeIcons = [<IconFortress key="f" />, <IconLandscape key="l" />, <IconCompass key="c" />];

// ─── tip icons ────────────────────────────────────────────────────
const IconShoe = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 15.5h14c1 0 2-.5 2-1.5v-1c-2-.5-4-2.5-4-5 0-2-1.5-3.5-3.5-3.5S7 6.5 6.5 8L4 12H2v3.5z"/>
  </svg>
);
const IconWater = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 2.5h5a1 1 0 011 1v1h-7v-1a1 1 0 011-1z"/>
    <path d="M6.5 4.5h7l1 1.5v10a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 016 16V6l.5-1.5z"/>
    <path d="M8 11 Q10 13 12 11"/>
  </svg>
);
const IconSun = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round">
    <circle cx="10" cy="10" r="3.2"/>
    <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4"/>
  </svg>
);
const IconBag = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 7.5h13l-1.5 10h-10l-1.5-10z"/>
    <path d="M7.5 7.5V5.5a2.5 2.5 0 015 0v2"/>
  </svg>
);
const tipIcons = [<IconShoe key="s" />, <IconWater key="w" />, <IconSun key="sun" />, <IconBag key="b" />];

// ─── helpers ──────────────────────────────────────────────────────
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: "rgba(212,175,112,0.52)",
      fontSize: "10px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      marginBottom: "14px",
    }}>
      {children}
    </p>
  );
}


// ─── page ─────────────────────────────────────────────────────────
export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routeData[slug];
  if (!route) notFound();

  const tips = route.sections.find((s) => s.label === "Советы")?.items ?? [];

  return (
    <main style={{
      height: "100vh",
      minHeight: "820px",
      maxHeight: "960px",
      overflow: "hidden",
      background: "#090909",
    }}>

      <div style={{
        maxWidth: "1920px",
        margin: "0 auto",
        padding: "22px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* rounded clipping container */}
        <div style={{
          borderRadius: "28px",
          overflow: "hidden",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}>

          {/* ══ HERO IMAGE ZONE — flex column, text flows to bottom ══ */}
          <div style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}>
            <Image
              src={route.heroImage}
              alt={route.title}
              fill
              className="object-cover"
              style={{ objectPosition: "center 46%", filter: "contrast(1.04) saturate(1.02)" }}
              priority
            />

            {/* overlay 1 — left gradient, text zone only */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, rgba(6,7,8,0.88) 0%, rgba(6,7,8,0.72) 16%, rgba(6,7,8,0.44) 32%, rgba(6,7,8,0.18) 48%, rgba(6,7,8,0.00) 64%)",
            }} />

            {/* overlay 2 — top nav */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "34%",
              background: "linear-gradient(180deg, rgba(7,8,10,0.42) 0%, rgba(7,8,10,0.18) 18%, rgba(7,8,10,0.00) 34%)",
            }} />

            {/* overlay 3 — bottom fade */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
              background: "linear-gradient(180deg, rgba(8,8,9,0.00) 0%, rgba(8,8,9,0.20) 42%, rgba(8,8,9,0.58) 72%, rgba(8,8,9,0.94) 100%)",
            }} />

            {/* ── NAV (flow) ── */}
            <nav style={{
              position: "relative",
              zIndex: 20,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "56px",
              paddingRight: "56px",
              paddingTop: "16px",
              paddingBottom: "16px",
              minHeight: "72px",
            }}>
              <div>
                <p style={{ color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.07em", lineHeight: 1.1, margin: 0 }}>WEEKEND</p>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "11px", letterSpacing: "0.04em", margin: 0 }}>по Петербургу</p>
              </div>
              <div className="hidden md:flex items-center" style={{ gap: "44px" }}>
                {["Маршруты", "Подбор", "Избранное ♡", "О проекте"].map((link) => (
                  <span key={link} style={{ color: "rgba(255,255,255,0.86)", fontSize: "15px", fontWeight: 500, cursor: "default" }}>{link}</span>
                ))}
              </div>
              <button style={{
                height: "52px",
                paddingInline: "24px",
                border: "1px solid rgba(214,175,112,0.68)",
                background: "rgba(12,12,12,0.18)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "999px",
                color: "rgba(255,255,255,0.86)",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                cursor: "default",
                whiteSpace: "nowrap",
              }}>
                ← К списку маршрутов
              </button>
            </nav>

            {/* ── FLEX SPACER — grows on taller screens → more air at top ── */}
            <div style={{ flex: 1, minHeight: "32px" }} />

            {/* ── HERO TEXT (flow, sticks to bottom) ── */}
            <div style={{
              position: "relative",
              zIndex: 10,
              paddingLeft: "56px",
              paddingBottom: "108px",
              flexShrink: 0,
            }}>
              <div style={{ maxWidth: "540px" }}>

                {/* pretitle */}
                {route.pretitle && (
                  <p style={{
                    fontSize: "18px",
                    lineHeight: 1.2,
                    color: "#D9A64B",
                    opacity: 0.96,
                    marginBottom: "16px",
                    fontStyle: "italic",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    letterSpacing: "0.01em",
                  }}>
                    {route.pretitle}
                  </p>
                )}

                {/* H1 */}
                <h1 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "84px",
                  lineHeight: 0.92,
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.98)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.32)",
                  margin: 0,
                }}>
                  {route.title}
                </h1>

                {/* description */}
                <p style={{
                  fontSize: "17px",
                  lineHeight: 1.56,
                  maxWidth: "400px",
                  color: "rgba(255,255,255,0.88)",
                  marginTop: "20px",
                  marginBottom: 0,
                  fontWeight: 300,
                }}>
                  {route.description}
                </p>

                {/* metrics */}
                {route.metrics && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "26px",
                    marginTop: "22px",
                    marginBottom: "28px",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(255,255,255,0.10)",
                  }}>
                    {route.metrics.slice(0, 3).map((m, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ filter: "drop-shadow(0 0 7px rgba(212,175,112,0.45))", display: "flex" }}>
                          {metricIcons[i]}
                        </span>
                        <div>
                          <p style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.95)", lineHeight: 1.1, margin: 0 }}>{m.value}</p>
                          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.52)", lineHeight: 1.1, margin: 0 }}>{m.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <button
                    className="transition-all active:scale-[0.97] hover:brightness-105"
                    style={{
                      width: "240px",
                      height: "62px",
                      borderRadius: "999px",
                      background: "linear-gradient(160deg, #E4C768 0%, #D4A438 24%, #C69030 52%, #D0A030 78%, #C49030 100%)",
                      color: "#14100A",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "0.015em",
                      border: "none",
                      cursor: "default",
                      boxShadow: [
                        "0 12px 32px rgba(201,150,60,0.44)",
                        "0 2px 8px rgba(160,110,20,0.32)",
                        "inset 0 1px 0 rgba(255,248,200,0.30)",
                        "inset 0 -2px 3px rgba(100,60,0,0.18)",
                      ].join(", "),
                    }}
                  >
                    Смотреть маршрут →
                  </button>
                  <button
                    className="transition-all active:scale-[0.97]"
                    style={{
                      width: "200px",
                      height: "62px",
                      borderRadius: "999px",
                      border: "1px solid rgba(212,175,112,0.52)",
                      background: "rgba(14,14,14,0.18)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      color: "rgba(255,255,255,0.90)",
                      fontSize: "16px",
                      cursor: "default",
                    }}
                  >
                    ♡ Сохранить
                  </button>
                </div>
              </div>
            </div>


          </div>
          {/* ── end hero image zone ── */}

          {/* ══ BOTTOM CARDS ══════════════════════════════════════ */}
          <div style={{
            marginTop: "-92px",
            position: "relative",
            zIndex: 20,
            padding: "0 12px 12px",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "0.62fr 2.05fr 0.82fr",
              gap: "14px",
            }}>

              {/* ── LEFT: Сценарий дня (narrow) ── */}
              <div style={{ ...glassCard, padding: "18px 18px 16px" }}>
                <CardLabel>Сценарий дня</CardLabel>
                <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                  {(route.scenario ?? []).map((step, i, arr) => (
                    <li key={step.time} style={{
                      display: "flex",
                      gap: "10px",
                      paddingBottom: i < arr.length - 1 ? "9px" : 0,
                    }}>
                      {/* circle + line */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{
                          width: "22px", height: "22px", borderRadius: "50%",
                          background: "linear-gradient(135deg, #DDB96A 0%, #C49435 100%)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 2px 8px rgba(212,175,112,0.36)",
                        }}>
                          <span style={{ color: "#12090A", fontSize: "9px", fontWeight: 800, lineHeight: 1 }}>{i + 1}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{
                            width: "1px", flex: 1, minHeight: "9px",
                            background: "rgba(212,175,112,0.34)",
                            margin: "3px 0",
                          }} />
                        )}
                      </div>
                      {/* time + title */}
                      <div style={{ display: "flex", gap: "8px", flex: 1, alignItems: "flex-start" }}>
                        <span style={{
                          color: "rgba(212,175,112,0.60)",
                          fontSize: "11px",
                          fontWeight: 600,
                          flexShrink: 0,
                          paddingTop: "3px",
                          minWidth: "36px",
                          fontVariantNumeric: "tabular-nums",
                        }}>
                          {step.time}
                        </span>
                        <p style={{
                          color: "rgba(255,255,255,0.88)",
                          fontSize: "13px",
                          fontWeight: 500,
                          lineHeight: 1.35,
                          paddingTop: "2px",
                          margin: 0,
                        }}>
                          {step.title}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── MIDDLE: Рядом есть + По дороге ── */}
              <PlaceCardsSection
                nearby={route.nearby ?? []}
                enroute={route.enroute ?? []}
              />

              {/* ── RIGHT: big block — top row 2 cards + bottom row full-width ── */}
              <div style={{ ...glassCard, padding: "14px" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}>

                  {/* top-left: О поездке */}
                  <div style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(212,175,112,0.10)",
                    borderRadius: "18px",
                    padding: "14px 13px 12px",
                  }}>
                    <CardLabel>О поездке</CardLabel>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {(route.facts ?? []).map((fact, i, arr) => (
                        <div key={fact.label} style={{
                          paddingBottom: i < arr.length - 1 ? "8px" : 0,
                          borderBottom: i < arr.length - 1 ? "1px solid rgba(212,175,112,0.08)" : "none",
                        }}>
                          <p style={{ color: "rgba(212,175,112,0.62)", fontSize: "9.5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", margin: "0 0 3px" }}>
                            {fact.label}
                          </p>
                          <p style={{ color: "rgba(255,255,255,0.86)", fontSize: "12.5px", fontWeight: 400, lineHeight: 1.3, margin: 0 }}>
                            {fact.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* top-right: Преимущества */}
                  {route.badges && (
                    <div style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(212,175,112,0.10)",
                      borderRadius: "18px",
                      padding: "14px 13px 12px",
                    }}>
                      <CardLabel>Преимущества</CardLabel>
                      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                        {route.badges.map((badge, i) => (
                          <div key={badge} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <div style={{
                              width: "28px", height: "28px", borderRadius: "8px", flexShrink: 0,
                              background: "rgba(212,175,112,0.09)",
                              border: "1px solid rgba(212,175,112,0.20)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                              {badgeIcons[i] ?? <span style={{ color: gold }}>✦</span>}
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "11.5px", lineHeight: 1.35, margin: 0 }}>
                              {badge}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* bottom: Советы — full width */}
                  {tips.length > 0 && (
                    <div style={{
                      gridColumn: "1 / -1",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(212,175,112,0.10)",
                      borderRadius: "18px",
                      padding: "14px 13px 12px",
                    }}>
                      <CardLabel>Советы</CardLabel>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {tips.slice(0, 4).map((tip, i) => (
                          <div key={tip} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <div style={{
                              width: "28px", height: "28px", borderRadius: "8px", flexShrink: 0,
                              background: "rgba(212,175,112,0.09)",
                              border: "1px solid rgba(212,175,112,0.18)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                              {tipIcons[i] ?? <span style={{ color: gold, fontSize: "11px" }}>✦</span>}
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "11px", lineHeight: 1.3, margin: 0 }}>
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
          {/* ── end bottom cards ── */}

        </div>
      </div>
    </main>
  );
}
