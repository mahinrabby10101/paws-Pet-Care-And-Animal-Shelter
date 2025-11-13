import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  // Outlet will render nested routes inside MainLayout
  return <Outlet />;
}
