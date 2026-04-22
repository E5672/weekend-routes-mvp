import type React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

type ScenarioStep = { time: string; title: string; subtitle: string };
type Metric = { value: string; label: string };
type PlaceCard = { title: string; meta: string };
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
      { title: "Смотровая точка на Волхов", meta: "2 км" },
      { title: "Берег Волхова", meta: "1,5 км" },
    ],
    enroute: [
      { title: "Кафе с домашней кухней", meta: "12 мин" },
      { title: "Локальная ферма", meta: "18 мин" },
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
      { label: "Советы", items: ["Взять ветровку", "Проверить погоду", "Удобная обувь"] },
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
      { label: "Советы", items: ["Взять плед", "Смотреть ветер", "Подходит для романтики"] },
    ],
  },
};

// ─── design tokens ────────────────────────────────────────────────
const gold = "#D4AF70";
const goldGlow = "rgba(212,175,112,0.34)";

// ─── metric icons — thin luxury line ─────────────────────────────
const IconDistance = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 5.5 5 5.5 8.5c0 5.5 6.5 13.5 6.5 13.5s6.5-8 6.5-13.5C18.5 5 15.5 2 12 2z"/>
    <circle cx="12" cy="8.5" r="2.2"/>
  </svg>
);
const IconDuration = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round">
    <circle cx="12" cy="12" r="8.5"/>
    <path d="M12 7v5l3 2.2"/>
  </svg>
);
const IconCost = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6.5" width="18" height="13" rx="2.2"/>
    <path d="M3 11h18"/>
    <path d="M7.5 4.5h9"/>
    <circle cx="17" cy="15" r="1.4" fill={gold} stroke="none"/>
  </svg>
);

const metricIcons = [<IconDistance key="d" />, <IconDuration key="t" />, <IconCost key="c" />];

// ─── badge icons ──────────────────────────────────────────────────
const IconFortress = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20V11l2.5-2.5V5h2v2h3V5h2v2h3V5h2v3.5L20 11v9H3z"/>
    <path d="M8.5 20v-5h5v5"/>
  </svg>
);
const IconLandscape = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 18L7 9l4.5 6 4-5.5L21 18H1z"/>
    <circle cx="16" cy="6" r="2.2"/>
  </svg>
);
const IconCompass = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8.5"/>
    <path d="M14 8l-2.5 5.5-5.5 2.5 2.5-5.5 5.5-2.5z"/>
    <circle cx="11" cy="11" r="1" fill={gold} stroke="none"/>
  </svg>
);

const badgeIcons = [<IconFortress key="f" />, <IconLandscape key="l" />, <IconCompass key="c" />];

// ─── helpers ──────────────────────────────────────────────────────
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: "rgba(255,255,255,0.36)",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      marginBottom: "14px",
    }}>
      {children}
    </p>
  );
}

function PlaceCardCompact({ card }: { card: PlaceCard }) {
  return (
    <div className="relative overflow-hidden" style={{
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.07)",
      aspectRatio: "16/10",
    }}>
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.42) 100%)",
        backgroundColor: "rgba(40,36,24,0.85)",
      }}/>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(212,175,112,0.07), transparent 40%)",
      }}/>
      <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: "10px 12px" }}>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "13px", fontWeight: 500, lineHeight: 1.3 }}>{card.title}</p>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "11px", marginTop: "3px" }}>{card.meta}</p>
      </div>
    </div>
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

  return (
    <main style={{
      height: "100vh",
      minHeight: "820px",
      maxHeight: "960px",
      overflow: "hidden",
      background: "#090909",
    }}>

      {/* ── outer padding + max-width ── */}
      <div style={{
        maxWidth: "1920px",
        margin: "0 auto",
        padding: "24px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* ── rounded clipping container ── */}
        <div style={{
          borderRadius: "28px",
          overflow: "hidden",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: 0,
        }}>

          {/* ══ HERO IMAGE ZONE (flex:1) ══════════════════════════ */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: 0 }}>

            {/* photo */}
            <Image
              src={route.heroImage}
              alt={route.title}
              fill
              className="object-cover"
              style={{
                objectPosition: "center 46%",
                filter: "contrast(1.04) saturate(1.02)",
              }}
              priority
            />

            {/* overlay 1 — left gradient, text zone only */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(90deg, rgba(6,7,8,0.88) 0%, rgba(6,7,8,0.72) 16%, rgba(6,7,8,0.44) 32%, rgba(6,7,8,0.18) 48%, rgba(6,7,8,0.00) 64%)",
            }} />

            {/* overlay 2 — top nav zone */}
            <div className="absolute inset-x-0 top-0" style={{
              height: "34%",
              background: "linear-gradient(180deg, rgba(7,8,10,0.42) 0%, rgba(7,8,10,0.18) 18%, rgba(7,8,10,0.00) 34%)",
            }} />

            {/* overlay 3 — bottom fade into cards */}
            <div className="absolute inset-x-0 bottom-0" style={{
              height: "55%",
              background: "linear-gradient(180deg, rgba(8,8,9,0.00) 0%, rgba(8,8,9,0.20) 42%, rgba(8,8,9,0.58) 72%, rgba(8,8,9,0.94) 100%)",
            }} />

            {/* ── NAV ── */}
            <nav style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 20,
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
                <p style={{ color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.07em", lineHeight: 1.1 }}>WEEKEND</p>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "11px", letterSpacing: "0.04em" }}>по Петербургу</p>
              </div>
              <div className="hidden md:flex items-center" style={{ gap: "44px" }}>
                {["Маршруты", "Подбор", "Избранное ♡", "О проекте"].map((link) => (
                  <span key={link} style={{ color: "rgba(255,255,255,0.86)", fontSize: "15px", fontWeight: 500, cursor: "default" }}>
                    {link}
                  </span>
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

            {/* ── HERO TEXT — anchored bottom-left ── */}
            <div style={{
              position: "absolute",
              left: "56px",
              bottom: "100px",
              width: "540px",
              zIndex: 10,
            }}>

              {/* pretitle */}
              {route.pretitle && (
                <p style={{
                  fontSize: "19px",
                  lineHeight: 1.2,
                  color: "#D9A64B",
                  opacity: 0.96,
                  marginBottom: "22px",
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
                fontSize: "20px",
                lineHeight: 1.52,
                maxWidth: "430px",
                color: "rgba(255,255,255,0.90)",
                marginTop: "28px",
                fontWeight: 300,
                letterSpacing: "0.005em",
              }}>
                {route.description}
              </p>

              {/* metrics row */}
              {route.metrics && (
                <div style={{ display: "flex", alignItems: "center", gap: "28px", marginTop: "30px", marginBottom: "34px" }}>
                  {route.metrics.slice(0, 3).map((m, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ filter: `drop-shadow(0 0 6px ${goldGlow})`, display: "flex" }}>
                        {metricIcons[i]}
                      </span>
                      <div>
                        <p style={{ fontSize: "20px", fontWeight: 500, color: "rgba(255,255,255,0.95)", lineHeight: 1.1, margin: 0 }}>
                          {m.value}
                        </p>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.62)", lineHeight: 1.1, margin: 0 }}>
                          {m.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button
                  className="transition-all active:scale-[0.97] hover:brightness-110"
                  style={{
                    width: "240px",
                    height: "64px",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #C9963C 0%, #E0B86A 100%)",
                    color: "#17130C",
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    boxShadow: "0 12px 28px rgba(201,150,60,0.34), 0 0 32px rgba(201,150,60,0.18)",
                    border: "none",
                    cursor: "default",
                  }}
                >
                  Смотреть маршрут →
                </button>
                <button
                  className="transition-all active:scale-[0.97] hover:brightness-110"
                  style={{
                    width: "220px",
                    height: "64px",
                    borderRadius: "999px",
                    border: "1px solid rgba(212,175,112,0.54)",
                    background: "rgba(14,14,14,0.18)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "17px",
                    fontWeight: 400,
                    cursor: "default",
                  }}
                >
                  ♡ Сохранить
                </button>
              </div>
            </div>

            {/* ── BADGE PANEL — right, centered ── */}
            {route.badges && (
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  right: "56px",
                  top: "52%",
                  transform: "translateY(-34%)",
                  zIndex: 10,
                }}
              >
                <div style={{
                  width: "420px",
                  padding: "26px 28px",
                  borderRadius: "28px",
                  background: "rgba(54,51,40,0.26)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(26px) saturate(1.15)",
                  WebkitBackdropFilter: "blur(26px) saturate(1.15)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.10)",
                }}>
                  {route.badges.map((badge, i) => (
                    <div
                      key={badge}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        paddingBottom: i < route.badges!.length - 1 ? "18px" : 0,
                        marginBottom: i < route.badges!.length - 1 ? "18px" : 0,
                        borderBottom: i < route.badges!.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      }}
                    >
                      <div style={{
                        width: "54px",
                        height: "54px",
                        borderRadius: "14px",
                        flexShrink: 0,
                        background: "rgba(212,175,112,0.09)",
                        border: "1px solid rgba(212,175,112,0.22)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        {badgeIcons[i] ?? <span style={{ color: gold, fontSize: "18px" }}>✦</span>}
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "18px", lineHeight: 1.42, margin: 0 }}>
                        {badge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
          {/* ══ END HERO IMAGE ZONE ══════════════════════════════ */}

          {/* ══ BOTTOM CARDS — float up into hero fade ══════════ */}
          <div style={{
            marginTop: "-92px",
            position: "relative",
            zIndex: 20,
            padding: "0 12px 12px",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.4fr 0.8fr",
              gap: "28px",
            }}>

              {/* ── Card 1: Сценарий дня ── */}
              <div style={{
                background: "rgba(18,18,18,0.34)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "26px",
                boxShadow: "0 22px 70px rgba(0,0,0,0.34)",
                padding: "18px 20px 16px",
              }}>
                <CardLabel>Сценарий дня</CardLabel>
                <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                  {(route.scenario ?? []).map((step, i, arr) => (
                    <li key={step.time} style={{ display: "flex", gap: "10px", paddingBottom: i < arr.length - 1 ? "10px" : 0 }}>
                      {/* circle + line */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#C9963C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 2px 8px rgba(201,150,60,0.38)",
                        }}>
                          <span style={{ color: "#1A150C", fontSize: "9px", fontWeight: 700, lineHeight: 1 }}>{i + 1}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{ width: "1px", flex: 1, minHeight: "10px", background: "rgba(212,175,112,0.34)", margin: "3px 0" }} />
                        )}
                      </div>
                      {/* time + title */}
                      <div style={{ display: "flex", gap: "8px", flex: 1 }}>
                        <span style={{
                          color: "rgba(255,255,255,0.36)",
                          fontSize: "10px",
                          fontWeight: 500,
                          flexShrink: 0,
                          paddingTop: "3px",
                          minWidth: "34px",
                          fontVariantNumeric: "tabular-nums",
                        }}>
                          {step.time}
                        </span>
                        <p style={{
                          color: "rgba(255,255,255,0.88)",
                          fontSize: "12px",
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

              {/* ── Card 2: Рядом есть + По дороге ── */}
              <div style={{
                background: "rgba(18,18,18,0.34)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "26px",
                boxShadow: "0 22px 70px rgba(0,0,0,0.34)",
                padding: "18px 20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}>
                <div>
                  <CardLabel>Рядом есть</CardLabel>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {(route.nearby ?? []).map((card) => (
                      <PlaceCardCompact key={card.title} card={card} />
                    ))}
                  </div>
                </div>
                <div>
                  <CardLabel>По дороге можно заехать</CardLabel>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {(route.enroute ?? []).map((card) => (
                      <PlaceCardCompact key={card.title} card={card} />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Card 3: Факты о поездке ── */}
              <div style={{
                background: "rgba(18,18,18,0.34)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "26px",
                boxShadow: "0 22px 70px rgba(0,0,0,0.34)",
                padding: "18px 20px 16px",
              }}>
                <CardLabel>О поездке</CardLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {(route.facts ?? []).map((fact, i, arr) => (
                    <div
                      key={fact.label}
                      style={{
                        paddingBottom: i < arr.length - 1 ? "14px" : 0,
                        borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}
                    >
                      <p style={{ color: "rgba(212,175,112,0.72)", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: "4px" }}>
                        {fact.label}
                      </p>
                      <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "14px", fontWeight: 400, lineHeight: 1.35 }}>
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* ══ END BOTTOM CARDS ════════════════════════════════ */}

        </div>
        {/* end rounded container */}

      </div>
      {/* end outer padding */}

    </main>
  );
}
