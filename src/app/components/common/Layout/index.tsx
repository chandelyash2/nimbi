import React from "react";
import { Header } from "./Header";
import { Timer } from "./Timer";
import { Footer } from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="min-h-[100vh] bg-[#242D32] overflow-hidden">
      <div className="fixed top-0 z-[999] w-full">
        <Timer />
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};
