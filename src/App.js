// App.js
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// ---------------- PUBLIC (Auth flow pages) ----------------
import ForgotPassword from "./components/LoginSignup/ForgotPassword";
import Login from "./components/LoginSignup/Login";
import ProfileSetup from "./components/LoginSignup/ProfileSetup";
import ResetPassword from "./components/LoginSignup/ResetPassword";
import Signup from "./components/LoginSignup/Signup";

// ---------------- Guards + Layout ----------------
import Layout from "./components/Layout";
import PrivateRoute from "./components/LoginSignup/PrivateRoute";

// ---------------- PRIVATE PAGES ----------------
import HomePage from "./HomePage";
import Dashboard from "./components/Dashboard";
import GetInTouch from "./components/GetInTouch";
import HowItWorks from "./components/HowItWorks";
import Profile from "./components/ProfileSetting/Profile";
import WhoWeAre from "./components/WhoWeAre";

// (example future pages)
import ProfilePage from "./components/ProfileSetting/AccountPage/ProfilePage/ProfilePage";
import NotificationSettings from "./components/ProfileSetting/Settings/NotificationSettings";
import PoliciesPage from "./components/ProfileSetting/Settings/PoliciesPage";
import SecurityPage from "./components/ProfileSetting/Settings/SecurityPage";

// ---------------- Auth context ----------------
import WhyChooseUs from "./components/WhyChooseUss";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// ✅ List of all PRIVATE pages (login ke baad dikhte hain)
const APP_ROUTES = [
  { path: "/home", element: <HomePage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/howitworks", element: <HowItWorks /> },
  { path: "/whychooseus", element: <WhyChooseUs /> },
  { path: "/profileinfo/profilepage", element: <ProfilePage /> },
  { path: "/notificationspage", element: <NotificationSettings /> },
  { path: "/securitypage", element: <SecurityPage /> },
  { path: "/policiepage", element: <PoliciesPage /> },
  { path: "/whowere", element: <WhoWeAre /> },
  { path: "/getintouch", element: <GetInTouch /> },
  { path: "/dashboard", element: <Dashboard /> },

  // 👉 future me koi bhi page add karna ho to bas yahan line add kar do
];

function RootRedirect() {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/candidate-career">
        <Routes>
          {/* Root redirect (agar / open karo to auth check karega) */}
          <Route path="/" element={<RootRedirect />} />

          {/* ---------------- PUBLIC ROUTES ---------------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profilesetup" element={<ProfileSetup />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* ---------------- PRIVATE ROUTES ---------------- */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              {APP_ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}

              {/* Private wildcard -> agar galat URL ho to home pe bhej do */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Route>

          {/* ---------------- PUBLIC FALLBACK ---------------- */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
