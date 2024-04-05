// authContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import { User } from "@/types/User";
import { COOKIE_NAME } from "@/lib/cookie";
import { getUserDetails } from "@/services/usersService";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userId: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const USER_ID_KEY = "userId";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authToken =
        Cookies.get(COOKIE_NAME) || localStorage.getItem(COOKIE_NAME);
      if (authToken) {
        const userId = localStorage.getItem(USER_ID_KEY) || "363";

        if (userId) {
          try {
            const userDetails = await getUserDetails(userId);
            setUser(userDetails);
            setIsAuthenticated(true);
          } catch (error) {
            setIsAuthenticated(false);
            console.error("Failed to fetch user details:", error);
          }
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (token: string, userId: string) => {
    document.cookie = `${COOKIE_NAME}=${token}; path=/`;
    localStorage.setItem(COOKIE_NAME, token);
    localStorage.setItem(USER_ID_KEY, userId);
    const userDetails = await getUserDetails(userId);
    setUser(userDetails);
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    localStorage.removeItem(COOKIE_NAME);
    localStorage.removeItem(USER_ID_KEY);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated as boolean,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
