import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <header>
        <h2 className="text-3xl">Admin Header</h2>
      </header>
      {children}
    </div>
  );
}
