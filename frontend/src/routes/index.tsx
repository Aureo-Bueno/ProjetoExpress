import { About } from "@/pages/About/About";
import { AddEdit } from "@/pages/AddEdit/AddEdit";
import { Home } from "@/pages/Home/Home";
import { Login } from "@/pages/Login";
import { View } from "@/pages/View";
import { PropsWithChildren, ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

interface RouterProviderProps {
  isAuthenticated: boolean;
}

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

function ProtectedRoute({ isAuthenticated, children }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export function RouterProvider({
  isAuthenticated,
}: PropsWithChildren<RouterProviderProps>) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <View />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
