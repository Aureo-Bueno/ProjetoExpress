import React, { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {}

export function Header({ children }: PropsWithChildren<HeaderProps>) {
  const [activeTab, setActiveTab] = useState("Home");
  const { logout, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/hone") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <>
      <div className="header">
        {isAuthenticated && user && (
          <>
            <p className="logo">Gerenciamento de Usuario</p>
            <p className="welcome">Bem-vindo, {user?.name}</p>
            <div className="header-right">
              <Link to="/home">
                <p
                  className={`${activeTab === "Home" ? "active" : ""}`}
                  onClick={() => setActiveTab("Home")}
                >
                  Home
                </p>
              </Link>
              <Link to="/add">
                <p
                  className={`${activeTab === "AddUser" ? "active" : ""}`}
                  onClick={() => setActiveTab("AddUser")}
                >
                  Criar Usuario
                </p>
              </Link>
            </div>
          </>
        )}

        <div className="header-right">
          <Link to="/about">
            <p
              className={`${activeTab === "About" ? "active" : ""}`}
              onClick={() => setActiveTab("About")}
            >
              Sobre
            </p>
          </Link>

          {isAuthenticated && user && (
            <p
              className={`${activeTab === "Sair" ? "active" : ""}`}
              onClick={logout}
            >
              Sair
            </p>
          )}
          {!isAuthenticated && !user && (
            <p
              onClick={() => navigate("/")}
            >
              Login
            </p>
          )}
        </div>
      </div>
      {children}
    </>
  );
}
