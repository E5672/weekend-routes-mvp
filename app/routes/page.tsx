import Link from "next/link";
import Image from "next/image";

const routes = [
  {
    id: 1,
    slug: "staraya-ladoga",
    pretitle: "Поездка на 1 день",
    title: "Старая Ладога",
    description: "История, крепость, вода и спокойная поездка, которая перезагружает",
    params: "120 км · 1 день · от 2500 ₽",
    heroImage: "/images/routes/staraya-ladoga/hero.png",
  },
  {
    id: 2,
    slug: "losevo",
    pretitle: "Активный день у воды",
    title: "Лосево",
    description: "Активный отдых, вода и красивые природные точки",
    params: "160 км · 1 день · от 3000 ₽",
    heroImage: "/images/routes/losevo/hero.png",
  },
  {
    id: 3,
    slug: "finskiy-zaliv",
    pretitle: "Вечер у воды",
    title: "Финский залив",
    description: "Побережье, закат, прогулка и отдых без перегруза",
    params: "90 км · 1 день · от 2000 ₽",
    heroImage: "/images/routes/finskiy-zaliv/hero.png",
  },
];

const gold = "#D4AF70";

export default function RoutesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#090909", padding: "0 0 64px" }}>

      {/* nav */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 56px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div>
          <p style={{ color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.07em", lineHeight: 1.1, margin: 0 }}>WEEKEND</p>
          <p style={{ color: "rgba(255,255,255,0.40)", fontSize: "11px", letterSpacing: "0.04em", margin: 0 }}>по Петербургу</p>
        </div>
        <Link
          href="/filter"
          style={{
            height: "46px",
            paddingInline: "24px",
            border: `1px solid rgba(212,175,112,0.52)`,
            background: "rgba(212,175,112,0.06)",
            backdropFilter: "blur(10px)",
            borderRadius: "999px",
            color: `rgba(212,175,112,0.90)`,
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Подобрать маршрут →
        </Link>
      </nav>

      {/* header */}
      <div style={{ padding: "56px 56px 40px" }}>
        <p style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: `rgba(212,175,112,0.60)`,
          margin: "0 0 14px",
        }}>
          Маршруты на выходные
        </p>
        <h1 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 400,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.97)",
          margin: 0,
        }}>
          Куда поехать из Петербурга
        </h1>
        <p style={{
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.52)",
          marginTop: "14px",
          maxWidth: "420px",
        }}>
          Подобранные маршруты для короткой поездки — на один день или уикенд
        </p>
      </div>

      {/* route cards */}
      <div style={{
        padding: "0 56px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "20px",
        maxWidth: "1440px",
      }}>
        {routes.map((route) => (
          <Link
            key={route.id}
            href={`/routes/${route.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(212,175,112,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              className="hover:scale-[1.015] hover:shadow-2xl"
            >
              {/* image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#111" }}>
                <Image
                  src={route.heroImage}
                  alt={route.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 46%" }}
                />
                {/* gradient over image */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)",
                }} />
              </div>

              {/* content */}
              <div style={{
                background: "rgba(14,12,8,0.95)",
                backdropFilter: "blur(20px)",
                padding: "20px 22px 22px",
                borderTop: "1px solid rgba(212,175,112,0.08)",
              }}>
                <p style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: `rgba(212,175,112,0.56)`,
                  margin: "0 0 6px",
                }}>
                  {route.pretitle}
                </p>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "26px",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "rgba(255,255,255,0.96)",
                  margin: "0 0 8px",
                }}>
                  {route.title}
                </h2>
                <p style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.55)",
                  margin: "0 0 16px",
                }}>
                  {route.description}
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(212,175,112,0.09)",
                  paddingTop: "14px",
                }}>
                  <span style={{
                    fontSize: "12px",
                    color: "rgba(212,175,112,0.62)",
                    letterSpacing: "0.04em",
                  }}>
                    {route.params}
                  </span>
                  <span style={{
                    fontSize: "13px",
                    color: `rgba(212,175,112,0.80)`,
                    fontWeight: 500,
                  }}>
                    Смотреть →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
