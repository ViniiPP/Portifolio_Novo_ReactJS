import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Footer } from '../components/footer/Footer';
import './ProjectDetailPage.css';

/**
 * ProjectDetailPage — Página dinâmica /projects/:id
 * Alimentada exclusivamente pelo arquivo central de dados.
 * Exibe 404 caso o ID não exista.
 */
const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projectsData.find((p) => p.id === id);

  // Inicia sempre no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // ── 404 ──
  if (!project) {
    return (
      <div className="project-detail__404">
        <div className="project-detail__404-content">
          <span className="project-detail__404-code">404</span>
          <h1 className="project-detail__404-title">Projeto não encontrado</h1>
          <p className="project-detail__404-desc">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <button
            className="project-detail__back-cta"
            onClick={() => navigate('/projects')}
          >
            ← Ver todos os projetos
          </button>
        </div>
      </div>
    );
  }

  const { github, demo, figma } = project.links;
  const hasAnyLink = github || demo || figma;

  return (
    <>
      <div className="project-detail">

        {/* ════════════════════════════════
            HEADER — botão de voltar + nome
            ════════════════════════════════ */}
        <header className="project-detail__header">
          <button
            className="project-detail__back-btn"
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            title="Voltar"
          >
            <i className="bx bx-arrow-back" aria-hidden="true" />
          </button>

          <h1 className="project-detail__header-title">{project.title}</h1>
        </header>

        {/* ════════════════════════════════
            COVER IMAGE
            ════════════════════════════════ */}
        <div className="project-detail__cover-wrapper">
          <img
            src={project.coverImage}
            alt={`Capa do projeto ${project.title}`}
            className="project-detail__cover"
            loading="eager"
          />
        </div>

        <div className="project-detail__body container">

          {/* ════════════════════════════════
              DESCRIÇÃO COMPLETA
              ════════════════════════════════ */}
          <section className="project-detail__section" aria-labelledby="desc-heading">
            <h2 id="desc-heading" className="project-detail__section-title">
              Sobre o projeto
            </h2>
            <p className="project-detail__description">{project.fullDescription}</p>
          </section>

          {/* ════════════════════════════════
              TECNOLOGIAS
              ════════════════════════════════ */}
          <section className="project-detail__section" aria-labelledby="stacks-heading">
            <h2 id="stacks-heading" className="project-detail__section-title">
              Tecnologias
            </h2>
            <div className="project-detail__stacks-grid">
              {project.stacks.map((stack) => (
                <div key={stack} className="project-detail__stack-card">
                  <i className="bx bx-code-alt project-detail__stack-icon" aria-hidden="true" />
                  <span className="project-detail__stack-name">{stack}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════
              LINKS CONDICIONAIS
              ════════════════════════════════ */}
          {hasAnyLink && (
            <section className="project-detail__section" aria-labelledby="links-heading">
              <h2 id="links-heading" className="project-detail__section-title">
                Links
              </h2>
              <div className="project-detail__links">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link-btn project-detail__link-btn--github"
                    aria-label="Ver código no GitHub"
                  >
                    <i className="bx bxl-github" aria-hidden="true" />
                    GitHub
                  </a>
                )}

                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link-btn project-detail__link-btn--demo"
                    aria-label="Ver demonstração do projeto"
                  >
                    <i className="bx bx-link-external" aria-hidden="true" />
                    Ver Demo
                  </a>
                )}

                {figma && (
                  <a
                    href={figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link-btn project-detail__link-btn--figma"
                    aria-label="Ver protótipo no Figma"
                  >
                    <i className="bx bxl-figma" aria-hidden="true" />
                    Figma
                  </a>
                )}
              </div>
            </section>
          )}

          {/* ════════════════════════════════
              GALERIA MASONRY
              ════════════════════════════════ */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="project-detail__section" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="project-detail__section-title">
                Galeria
              </h2>

              {/*
                Layout Masonry / Pinterest
                ─────────────────────────────────────────────────────────────────
                Aspect-ratio esperado das imagens:
                  - Desktop/Web screenshots: 16:9 ou 16:10
                  - Mobile screenshots: 9:16 (retrato)
                  - Logos/Capas: 1:1 ou 4:3

                Tamanho recomendado para substituição futura:
                  - Web screenshots: mínimo 1280 × 800px
                  - Mobile screenshots: mínimo 390 × 844px
                  - Logos: mínimo 600 × 600px
                ─────────────────────────────────────────────────────────────────
              */}
              <div className="project-detail__gallery">
                {project.gallery.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="project-detail__gallery-item"
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} — tela ${index + 1}`}
                      className="project-detail__gallery-img"
                      loading="lazy"
                    />
                    <div className="project-detail__gallery-overlay">
                      <i className="bx bx-zoom-in" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>

      {/* Modal / Lightbox para a Imagem */}
      {selectedImage && (
        <div className="project-detail__modal" onClick={() => setSelectedImage(null)}>
          <span className="project-detail__modal-close" onClick={() => setSelectedImage(null)}>
            <i className="bx bx-x" />
          </span>
          <img src={selectedImage} alt="Imagem ampliada" className="project-detail__modal-img" />
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProjectDetailPage;
