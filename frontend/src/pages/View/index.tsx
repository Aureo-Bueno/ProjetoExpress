import { Header } from "@/components/Header";
import { useGetUserById } from "@/hooks/useGetUserById";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./View.css";

export function View() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params?.id || "";
  const { user, loading } = useGetUserById(id);

  return (
    <Header>
      <div className="view-container">
        {loading && (
          <div className="view-loading">
            <h2>Loading...</h2>
          </div>
        )}

        {!loading && user && (
          <div className="user-details">
            <h2>Detalhes do Usuário</h2>

            <div className="user-info-item">
              <strong>Nome:</strong>
              <p>{user.name}</p>
            </div>

            <div className="user-info-item">
              <strong>Email:</strong>
              <p>{user.email}</p>
            </div>

            <div className="user-info-item">
              <strong>Contato:</strong>
              <p>{user.contact}</p>
            </div>

            <div className="view-actions">
              <button
                className="btn-view btn-back"
                onClick={() => navigate("/home")}
              >
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
}
