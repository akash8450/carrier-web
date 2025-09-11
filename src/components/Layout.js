// components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer"
export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* ✅ Sticky header (sab private pages par common) */}
      <Header />

      {/* ✅ Page body */}
      <main className="flex-1">
        <Outlet />

      </main>
      <Footer/>
    </div>
  );
}
