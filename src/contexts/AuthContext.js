import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const isAuthenticated = !!token;

  const login = (dummyToken = "FRONT_ONLY_TOKEN") => {
    localStorage.setItem("token", dummyToken);
    setToken(dummyToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "token") setToken(e.newValue || "");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({ token, isAuthenticated, login, logout }),
    [token, isAuthenticated]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
