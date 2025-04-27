// components/Squircle.tsx
"use client";

import { useSquircle } from "../hooks/useSquircle";

export default function Squircle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSquircle();

  const squircleStyle: React.CSSProperties = {
    maskImage: "paint(squircle)",
    WebkitMaskImage: "paint(squircle)",
    borderRadius: "40px", // required for squircle to show properly
    // Use proper type for CSS properties (avoid 'any')
    "--squircle-radius": "40px",
    "--squircle-smooth": "1",
    "--squircle-outline": "none",
  } as React.CSSProperties;

  return (
    <div className="w-auto h-auto" style={squircleStyle}>
      {children}
    </div>
  );
}
