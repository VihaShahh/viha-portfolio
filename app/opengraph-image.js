import { ImageResponse } from "next/og";

export const alt = "Viha Shah — Backend Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#171612", color: "#f1eee7", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, width: "100%", height: "100%", fontFamily: "sans-serif" }}>
        <div style={{ color: "#dc9676", fontSize: 28, marginBottom: 28 }}>Backend systems · Intelligent workflows</div>
        <div style={{ fontSize: 86, fontWeight: 700, marginBottom: 22 }}>Viha Shah</div>
        <div style={{ fontSize: 38, marginBottom: 42 }}>Backend Software Developer</div>
        <div style={{ color: "#b8b2a8", fontSize: 25 }}>Node.js · NestJS · Python · Applied AI</div>
      </div>
    ),
    size,
  );
}
