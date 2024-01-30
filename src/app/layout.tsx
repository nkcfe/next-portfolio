import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "남궁철 포트폴리오",
  description: "프론트엔드 개발자 남궁철의 포트폴리오입니다.",
  keywords: ["프론트엔드", "개발자", "포트폴리오"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon/svg" />
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
