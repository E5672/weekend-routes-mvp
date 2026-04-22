"use client";

import { useState } from "react";
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

const gold = "#D4AF70";

export default function FilterPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(option: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  }

  return (
    <main style={{ minHeight: "100vh", background: "#090909", paddingBottom: "120px" }}>

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
          href="/routes"
          style={{
            height: "46px",
            paddingInline: "24px",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(10px)",
            borderRadius: "999px",
            color: "rgba(255,255,255,0.70)",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          ← Все маршруты
        </Link>
      </nav>

      {/* header */}
      <div style={{ padding: "52px 56px 40px" }}>
        <p style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(212,175,112,0.60)",
          margin: "0 0 14px",
        }}>
          Фильтр
        </p>
        <h1 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.97)",
          margin: 0,
        }}>
          Подбор маршрута
        </h1>
        <p style={{
          fontSize: "15px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          marginTop: "12px",
        }}>
          Выберите один или несколько параметров
        </p>
      </div>

      {/* filters */}
      <div style={{ padding: "0 56px", display: "flex", flexDirection: "column", gap: "36px", maxWidth: "860px" }}>
        {sections.map((section) => (
          <div key={section.label}>
            <p style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(212,175,112,0.52)",
              margin: "0 0 14px",
            }}>
              {section.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {section.options.map((option) => {
                const active = selected.has(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggle(option)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "999px",
                      border: active
                        ? `1px solid rgba(212,175,112,0.68)`
                        : "1px solid rgba(255,255,255,0.12)",
                      background: active
                        ? "rgba(212,175,112,0.10)"
                        : "rgba(255,255,255,0.04)",
                      color: active
                        ? gold
                        : "rgba(255,255,255,0.62)",
                      fontSize: "14px",
                      fontWeight: active ? 500 : 400,
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.15s",
                      boxShadow: active
                        ? "0 0 18px rgba(212,175,112,0.12)"
                        : "none",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* sticky bottom CTA */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px 56px 24px",
        background: "linear-gradient(to top, rgba(9,9,9,0.97) 60%, rgba(9,9,9,0.00) 100%)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}>
        <Link
          href="/routes"
          style={{
            height: "58px",
            paddingInline: "40px",
            borderRadius: "999px",
            background: "linear-gradient(160deg, #E4C768 0%, #D4A438 24%, #C69030 52%, #C49030 100%)",
            color: "#14100A",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.015em",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            boxShadow: "0 10px 28px rgba(201,150,60,0.38), inset 0 1px 0 rgba(255,248,200,0.28)",
          }}
          className="hover:brightness-105 transition-all active:scale-[0.97]"
        >
          Показать маршруты
          {selected.size > 0 && (
            <span style={{
              marginLeft: "10px",
              background: "rgba(20,16,10,0.22)",
              borderRadius: "999px",
              padding: "2px 9px",
              fontSize: "13px",
              fontWeight: 700,
            }}>
              {selected.size}
            </span>
          )}
        </Link>
        {selected.size > 0 && (
          <button
            onClick={() => setSelected(new Set())}
            style={{
              height: "58px",
              paddingInline: "24px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.52)",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Сбросить
          </button>
        )}
      </div>
    </main>
  );
}
