import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "박민희 | Developer Portfolio",
  description: "전산/개발자 박민희의 포트폴리오 사이트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="text-white antialiased">
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
