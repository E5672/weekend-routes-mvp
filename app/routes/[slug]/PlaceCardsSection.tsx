"use client";

import Image from "next/image";
import { useState } from "react";

export type PlaceCard = { title: string; meta: string; image?: string };

function PlaceCardItem({
  card,
  onOpen,
}: {
  card: PlaceCard;
  onOpen: (src: string) => void;
}) {
  return (
    <div
      onClick={() => card.image && onOpen(card.image)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "14px",
        height: "100%",
        background: "#080604",
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
        <Image
          src={card.image}
          alt={card.title}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      ) : (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(58,46,18,0.68) 0%, rgba(10,8,4,0.94) 65%, rgba(8,6,2,0.97) 100%)",
        }} />
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  color: "rgba(212,175,112,0.52)",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  marginBottom: "14px",
};

export function PlaceCardsSection({
  nearby,
  enroute,
}: {
  nearby: PlaceCard[];
  enroute: PlaceCard[];
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* section 1 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <p style={labelStyle}>Рядом есть</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gap: "11px",
          flex: 1,
          minHeight: "124px",
        }}>
          {nearby.map((card) => (
            <PlaceCardItem key={card.title} card={card} onOpen={setLightbox} />
          ))}
        </div>
      </div>

      {/* section 2 */}
      <div style={{
        borderTop: "1px solid rgba(212,175,112,0.09)",
        paddingTop: "14px",
        marginTop: "16px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}>
        <p style={labelStyle}>По дороге можно заехать</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gap: "11px",
          flex: 1,
          minHeight: "124px",
        }}>
          {enroute.map((card) => (
            <PlaceCardItem key={card.title} card={card} onOpen={setLightbox} />
          ))}
        </div>
      </div>

      {/* lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.90)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "28px",
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.88)",
              fontSize: "24px",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 1200px)",
              height: "min(85vh, 800px)",
            }}
          >
            <Image
              src={lightbox}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
