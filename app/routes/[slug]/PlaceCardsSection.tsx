"use client";

import React, { useState } from "react";
import Image from "next/image";

type PlaceCard = { title: string; meta: string; image?: string };

const gold = "#D4AF70";

const glassCard: React.CSSProperties = {
  background: "rgba(15,13,9,0.74)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(212,175,112,0.14)",
  borderRadius: "26px",
  boxShadow: "0 22px 70px rgba(0,0,0,0.42), inset 0 1px 0 rgba(212,175,112,0.08)",
};

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

function PlaceCardItem({ card, onClick }: { card: PlaceCard; onClick: () => void }) {
  return (
    <div
      onClick={card.image ? onClick : undefined}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "14px",
        height: "100%",
        minHeight: "110px",
        border: "1px solid rgba(212,175,112,0.26)",
        cursor: card.image ? "pointer" : "default",
        background: "#0a0804",
        boxShadow: [
          "0 0 0 1px rgba(212,175,112,0.08) inset",
          "0 4px 22px rgba(180,138,48,0.10)",
          "0 0 36px rgba(180,138,48,0.06)",
        ].join(", "),
      }}
    >
      {card.image ? (
        /* photo — served unoptimized to handle PNG files with .jpg extension */
        <Image
          src={card.image}
          alt={card.title}
          fill
          unoptimized
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      ) : (
        /* fallback when no photo: dark gradient + title */
        <>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(58,46,18,0.68) 0%, rgba(10,8,4,0.94) 65%, rgba(8,6,2,0.97) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
            background: "linear-gradient(to top, rgba(180,138,48,0.14) 0%, transparent 100%)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(to right, transparent, rgba(212,175,112,0.22), transparent)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "8px 11px",
          }}>
            <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "12.5px", fontWeight: 500, lineHeight: 1.3, margin: 0 }}>
              {card.title}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3px" }}>
              <span style={{ color: "rgba(212,175,112,0.55)", fontSize: "10.5px" }}>{card.meta}</span>
              <span style={{ color: "rgba(212,175,112,0.45)", fontSize: "12px" }}>→</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function PlaceCardsSection({
  nearby,
  enroute,
}: {
  nearby: PlaceCard[];
  enroute: PlaceCard[];
}) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      {/* ── MIDDLE card ── */}
      <div style={{ ...glassCard, padding: "18px 20px 16px", display: "flex", flexDirection: "column" }}>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <CardLabel>Рядом есть</CardLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            gap: "11px",
            flex: 1,
            minHeight: 0,
          }}>
            {nearby.map((card) => (
              <PlaceCardItem
                key={card.title}
                card={card}
                onClick={() => card.image && setLightboxSrc(card.image)}
              />
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(212,175,112,0.09)",
          paddingTop: "14px",
          marginTop: "14px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}>
          <CardLabel>По дороге можно заехать</CardLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            gap: "11px",
            flex: 1,
            minHeight: 0,
          }}>
            {enroute.map((card) => (
              <PlaceCardItem
                key={card.title}
                card={card}
                onClick={() => card.image && setLightboxSrc(card.image)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.90)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* close button */}
          <button
            onClick={() => setLightboxSrc(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "28px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.82)",
              fontSize: "24px",
              lineHeight: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ×
          </button>

          {/* image — click inside doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(900px, 88vw)",
              height: "min(675px, 86vh)",
            }}
          >
            <Image
              src={lightboxSrc}
              alt="фото"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
