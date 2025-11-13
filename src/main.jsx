import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import MyProfile from "./pages/Profile/MyProfile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import "./index.css";

// ✅ Create router with Data API
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // persistent Navbar/Footer
    children: [
      { index: true, element: <Home /> }, // default route
      { path: "service/:id", element: <PrivateRoute><ServiceDetails /></PrivateRoute> },
      { path: "profile", element: <PrivateRoute><MyProfile /></PrivateRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
