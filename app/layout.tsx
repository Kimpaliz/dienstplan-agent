import "../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-zinc-100 text-zinc-900">{children}</body>
    </html>
  );
}
