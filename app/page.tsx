import Link from "next/link";

const chips = ["У воды", "С детьми", "Романтик", "Активный отдых"];
const gold = "#D4AF70";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#090909",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 24px",
    }}>

      {/* subtle radial glow */}
      <div style={{
        position: "fixed",
        top: "38%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "500px",
        background: "radial-gradient(ellipse, rgba(212,175,112,0.06) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 0,
        maxWidth: "560px",
        width: "100%",
      }}>

        {/* logo */}
        <p style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(212,175,112,0.56)",
          marginBottom: "48px",
        }}>
          WEEKEND · Петербург
        </p>

        {/* H1 */}
        <h1 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(44px, 7vw, 72px)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: "rgba(255,255,255,0.97)",
          margin: 0,
        }}>
          Куда поехать<br />на выходные
        </h1>

        <p style={{
          fontSize: "17px",
          fontWeight: 300,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.48)",
          marginTop: "20px",
          marginBottom: "40px",
        }}>
          Подберём маршрут под тебя за 1 минуту
        </p>

        {/* CTA */}
        <Link
          href="/filter"
          className="hover:brightness-105 transition-all active:scale-[0.97]"
          style={{
            height: "62px",
            paddingInline: "48px",
            borderRadius: "999px",
            background: "linear-gradient(160deg, #E4C768 0%, #D4A438 24%, #C69030 52%, #C49030 100%)",
            color: "#14100A",
            fontSize: "17px",
            fontWeight: 600,
            letterSpacing: "0.015em",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            boxShadow: [
              "0 12px 32px rgba(201,150,60,0.40)",
              "0 2px 8px rgba(160,110,20,0.28)",
              "inset 0 1px 0 rgba(255,248,200,0.28)",
            ].join(", "),
          }}
        >
          Найти маршрут →
        </Link>

        {/* chips */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "28px" }}>
          {chips.map((label) => (
            <Link
              key={label}
              href="/filter"
              style={{
                padding: "9px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.58)",
                fontSize: "14px",
                fontWeight: 400,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                transition: "all 0.15s",
              }}
              className="hover:border-[rgba(212,175,112,0.42)] hover:text-[rgba(212,175,112,0.80)] transition-all"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* bottom link */}
        <Link
          href="/routes"
          style={{
            marginTop: "40px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.30)",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
          className="hover:text-[rgba(255,255,255,0.55)] transition-colors"
        >
          Посмотреть все маршруты
        </Link>

      </div>
    </main>
  );
}
