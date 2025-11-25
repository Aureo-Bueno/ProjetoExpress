import { Header } from "@/components/Header";
import { JSX } from "react";
import "./About.css";

export function About(): JSX.Element {
  return (
    <Header>
      <div className="about-container">
        <section className="about-hero">
          <h1 className="about-hero-title">Sobre a Plataforma</h1>
          <p className="about-hero-subtitle">
            Um sistema moderno de gerenciamento de usuários construído com as
            melhores práticas e tecnologias atuais
          </p>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>O que é a Plataforma?</h2>
            <p>
              A plataforma de <strong>Gerenciamento de Usuários</strong> é uma
              solução completa e moderna para criar, visualizar, editar e
              deletar registros de usuários de forma intuitiva e segura. Ela
              oferece uma interface responsiva, autenticação robusta e uma
              arquitetura escalável que facilita futuras expansões.
            </p>
            <p>
              Com foco em user experience e boas práticas de desenvolvimento, a
              plataforma foi completamente reformulada após 3 anos, passando de
              uma arquitetura legada baseada em React Scripts para uma solução
              moderna e profissional.
            </p>
          </div>
        </section>

        <section className="about-section about-evolution">
          <div className="about-section-content">
            <h2>Da Arquitetura Legada à Modernização</h2>
            <div className="evolution-timeline">
              <div className="timeline-item timeline-item-old">
                <div className="timeline-marker">
                  <span className="timeline-icon">⚙️</span>
                </div>
                <div className="timeline-content">
                  <h3>3 Anos Atrás</h3>
                  <ul>
                    <li>React Scripts (Build tool antigo)</li>
                    <li>JavaScript puro (sem TypeScript)</li>
                    <li>Arquitetura básica e não escalável</li>
                    <li>Dependências desatualizadas</li>
                    <li>Sem suporte adequado a tipos</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-connector"></div>

              <div className="timeline-item timeline-item-new">
                <div className="timeline-marker">
                  <span className="timeline-icon">✨</span>
                </div>
                <div className="timeline-content">
                  <h3>Hoje - Modernizado</h3>
                  <ul>
                    <li>
                      <strong>Vite</strong> - Build tool ultrarrápido
                    </li>
                    <li>
                      <strong>TypeScript</strong> - Type safety completo
                    </li>
                    <li>
                      <strong>Arquitetura Escalável</strong> - Pronta para
                      crescer
                    </li>
                    <li>
                      <strong>Dependências Atualizadas</strong> - Versões latest
                    </li>
                    <li>
                      <strong>Design System</strong> - Consistência visual
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>Stack Frontend 🎨</h2>
            <p>
              O frontend foi completamente reconstruído utilizando as
              tecnologias mais modernas do ecossistema React:
            </p>

            <div className="tech-stack">
              <div className="tech-card">
                <div className="tech-icon">⚡</div>
                <h3>Vite</h3>
                <p>
                  Build tool ultrarrápido que substitui React Scripts com
                  desempenho superior e HMR instantâneo.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">📘</div>
                <h3>TypeScript</h3>
                <p>
                  Linguagem superset de JavaScript que adiciona segurança de
                  tipos, melhorando a qualidade e manutenibilidade do código.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">🛣️</div>
                <h3>React Router DOM</h3>
                <p>
                  Biblioteca robusta para roteamento client-side, mantendo a
                  navegação fluida e semântica.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">🌐</div>
                <h3>Axios</h3>
                <p>
                  HTTP client moderno com interceptors, cancelamento de
                  requisições e tratamento avançado de erros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>Arquitetura Frontend</h2>
            <p>
              A estrutura frontend segue padrões profissionais com separação de
              responsabilidades clara:
            </p>

            <div className="architecture-grid">
              <div className="arch-item">
                <h4>📁 Components</h4>
                <p>Componentes reutilizáveis como Header e navegação</p>
              </div>
              <div className="arch-item">
                <h4>📄 Pages</h4>
                <p>Páginas principais (Home, About, View, AddEdit)</p>
              </div>
              <div className="arch-item">
                <h4>🪝 Hooks</h4>
                <p>Custom hooks para lógica de negócio reutilizável</p>
              </div>
              <div className="arch-item">
                <h4>🔌 Services</h4>
                <p>Camada de integração com APIs e dados externos</p>
              </div>
              <div className="arch-item">
                <h4>📦 Context</h4>
                <p>Context API para gerenciamento de estado global (Auth)</p>
              </div>
              <div className="arch-item">
                <h4>⚙️ Utils</h4>
                <p>Utilitários, constantes e helpers reutilizáveis</p>
              </div>
            </div>

            <div className="architecture-visual">
              <img
                src="/images/arch-front.png"
                alt="Frontend Architecture Diagram"
                className="arch-diagram"
              />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>Stack Backend 🚀</h2>
            <p>
              O backend foi desenvolvido com <strong>Express</strong>, um
              framework progressivo Node.js que fornece uma arquitetura bem
              estruturada e escalável:
            </p>

            <div className="tech-stack">
              <div className="tech-card">
                <div className="tech-icon">🏗️</div>
                <h3>Express</h3>
                <p>
                  O Express.js é o framework mais popular do Node.js para
                  construir servidores web e APIs. É um framework minimalista,
                  rápido e flexível que facilita a criação de aplicações backend
                  em JavaScript.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">📋</div>
                <h3>Controllers</h3>
                <p>
                  Camada responsável pelo roteamento e recebimento de
                  requisições HTTP.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">⚙️</div>
                <h3>Services</h3>
                <p>
                  Lógica de negócio centralizada e reutilizável para operações
                  CRUD.
                </p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">📊</div>
                <h3>Factory Pattern</h3>
                <p>
                  Padrão de design para criação de objetos complexos de forma
                  padronizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>Arquitetura Backend</h2>
            <p>
              A estrutura backend segue os padrões de Clean Architecture com
              separação clara de responsabilidades:
            </p>

            <div className="architecture-grid">
              <div className="arch-item">
                <h4>🛣️ Routes</h4>
                <p>Definição de endpoints (auth-route, user-route)</p>
              </div>
              <div className="arch-item">
                <h4>🎛️ Controllers</h4>
                <p>
                  Lógica de requisição/resposta (auth-controller,
                  user-controller)
                </p>
              </div>
              <div className="arch-item">
                <h4>💼 Services</h4>
                <p>Lógica de negócio (auth-service, user-service)</p>
              </div>
              <div className="arch-item">
                <h4>🏭 Factory</h4>
                <p>Instanciação de objetos (user-factory)</p>
              </div>
              <div className="arch-item">
                <h4>📝 Types</h4>
                <p>Definição de interfaces e tipos (user.ts)</p>
              </div>
              <div className="arch-item">
                <h4>🔧 Utils</h4>
                <p>Utilitários e logger para debugging</p>
              </div>
            </div>

            <div className="architecture-visual">
              <img
                src="/images/arch-backend.png"
                alt="Backend Architecture Diagram"
                className="arch-diagram"
              />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-content">
            <h2>Características Principais</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">🔐</span>
                <h3>Autenticação Segura</h3>
                <p>Sistema de login com tokens JWT e Context API</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <h3>Design Responsivo</h3>
                <p>Interface adaptável para desktop, tablet e mobile</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <h3>Design System</h3>
                <p>Consistência visual com variáveis CSS modernos</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">♿</span>
                <h3>Acessibilidade</h3>
                <p>Padrões WCAG para inclusão e usabilidade</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <h3>Performance</h3>
                <p>Build otimizado com Vite e lazy loading</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <h3>Type Safety</h3>
                <p>TypeScript em 100% do projeto</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-cta">
          <div className="about-section-content">
            <h2>Pronto para usar?</h2>
            <p>
              Explore a plataforma de gerenciamento de usuários e veja como a
              modernização traz eficiência, segurança e escalabilidade.
            </p>
            <a href="/home" className="cta-button">
              Voltar para Home →
            </a>
          </div>
        </section>
      </div>
    </Header>
  );
}
