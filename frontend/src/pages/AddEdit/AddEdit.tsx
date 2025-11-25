import React, { useState } from "react";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "@/hooks/useCreateUser";
import { Header } from "@/components/Header";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

export function AddEdit() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const { createUser, loading } = useCreateUser();

  const { name, email, contact } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      createUser({ name, email, contact });
      setTimeout(() => navigate("/home"), 500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Header>
      <div className="add-user-container">
        <div className="add-user-form-wrapper">
          <h2 className={`add-user-title ${loading ? "loading" : ""}`}>
            {loading ? "Loading..." : "Adicionar Usuário"}
          </h2>

          <form className="add-user-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Digite o nome..."
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Digite o email..."
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact" className="form-label">
                Contato
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="form-input"
                placeholder="Digite o contato..."
                value={contact}
                onChange={handleInputChange}
                required
              />
            </div>

            <input type="submit" value="Adicionar" className="form-submit" />
          </form>
        </div>
      </div>
    </Header>
  );
}
