import { useAuth } from "@/hooks/useAuth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Header com Logo */}
          <div className="login-header">
            <h1 className="login-logo">Gerenciamento de Usuário</h1>
            <p className="login-tagline">Acesse sua conta</p>
          </div>

          {/* Formulário */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="login-error">
                <span className="error-icon">⚠️</span>
                <p>{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Carregando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          {/* Footer com Link About */}
          <div className="login-footer">
            <p className="login-footer-text">
              Primeira vez aqui?{" "}
              <Link to="/about" className="login-about-link">
                Conheça a plataforma
              </Link>
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="login-info">
          <div className="info-item">
            <span className="info-icon">🔐</span>
            <h3>Seguro</h3>
            <p>Seus dados são protegidos com autenticação JWT</p>
          </div>
          <div className="info-item">
            <span className="info-icon">⚡</span>
            <h3>Rápido</h3>
            <p>Interface otimizada para melhor performance</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📱</span>
            <h3>Responsivo</h3>
            <p>Funciona perfeitamente em qualquer dispositivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
