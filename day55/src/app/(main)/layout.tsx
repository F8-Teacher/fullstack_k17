import Header from "@/components/layouts/Header";
import React from "react";
import { Toaster } from "@/components/ui/sonner";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout">
      <Header />
      <main className="max-w-300 py-3 mx-auto">{children}</main>
      <Toaster position="top-right" />
    </div>
  );
}
