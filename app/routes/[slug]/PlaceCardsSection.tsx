"use client";

import { useState } from "react";
import Image from "next/image";
import type React from "react";

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
      onClick={onClick}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "14px",
        height: "100%",
        border: "1px solid rgba(212,175,112,0.26)",
        cursor: card.image ? "pointer" : "default",
        boxShadow: [
          "0 0 0 1px rgba(212,175,112,0.08) inset",
          "inset 0 0 18px rgba(180,138,48,0.06)",
          "0 4px 22px rgba(180,138,48,0.10)",
          "0 0 36px rgba(180,138,48,0.06)",
        ].join(", "),
      }}
    >
      {card.image ? (
        /* photo — full brightness, no overlay */
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      ) : (
        /* fallback: dark gold gradient + text */
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
              <span style={{ color: `rgba(212,175,112,0.55)`, fontSize: "10.5px" }}>{card.meta}</span>
              <span style={{ color: `rgba(212,175,112,0.45)`, fontSize: "12px" }}>→</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.90)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "rgba(255,255,255,0.80)",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>

      {/* image container — stops click propagation so only backdrop closes */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(90vw, 960px)",
          height: "min(82vh, 640px)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.72)",
          border: "1px solid rgba(212,175,112,0.16)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* caption strip */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "20px 24px 18px",
          background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)",
        }}>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "15px", fontWeight: 500, margin: 0 }}>{alt}</p>
        </div>
      </div>
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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  function open(card: PlaceCard) {
    if (card.image) setLightbox({ src: card.image, alt: card.title });
  }

  return (
    <>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}

      <div style={{ ...glassCard, padding: "18px 20px 16px", display: "flex", flexDirection: "column" }}>

        {/* Рядом есть */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <CardLabel>Рядом есть</CardLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            gap: "14px",
            flex: 1,
            minHeight: "154px",
          }}>
            {nearby.map((card) => (
              <PlaceCardItem key={card.title} card={card} onClick={() => open(card)} />
            ))}
          </div>
        </div>

        {/* По дороге */}
        <div style={{
          borderTop: "1px solid rgba(212,175,112,0.09)",
          paddingTop: "14px",
          marginTop: "16px",
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
            gap: "14px",
            flex: 1,
            minHeight: "154px",
          }}>
            {enroute.map((card) => (
              <PlaceCardItem key={card.title} card={card} onClick={() => open(card)} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
