import React from "react";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { RouterProvider } from "./routes";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>Carregando...</div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <RouterProvider isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
