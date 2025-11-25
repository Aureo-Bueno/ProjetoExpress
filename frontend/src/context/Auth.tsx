import { STORAGE_KEY, TOKEN_KEY } from "@/constants/localstorage.constants";
import { apiClient, ApiResponse } from "@/services/api";
import React, { useEffect, useState, ReactNode } from "react";
import { AuthContextType, User } from "./types";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do storage:", error);
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(TOKEN_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserFromStorage();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);

      const { success, data } = await apiClient.post<
        ApiResponse<{
          user: User;
          token: string;
        }>
      >("/auth/login", {
        email,
        password,
      });

      if (!success) {
        throw new Error("Falha na autenticação");
      }

      const userData: User = {
        id: data?.user.id,
        email: data?.user.email,
        name: data?.user.name,
        role: data?.user.role,
        createdAt: data?.user.createdAt,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

      if (data?.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
      }

      setUser(userData);
    } catch (error) {
      console.error("Erro durante login:", error);
      setUser(null);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(TOKEN_KEY);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TOKEN_KEY);
  };

  const handleSetUser = (newUser: User | null): void => {
    if (newUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    } else {
      logout();
    }
  };

  const isAuthenticated: boolean = !!user;

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    setUser: handleSetUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
