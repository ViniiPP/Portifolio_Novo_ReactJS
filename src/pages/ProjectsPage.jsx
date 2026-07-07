import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { Footer } from '../components/footer/Footer';
import './ProjectsPage.css';

/**
 * ProjectsPage — Página /projects
 * Lista todos os projetos em grid responsivo.
 */
const ProjectsPage = () => {
  const navigate = useNavigate();

  // Garante que a página sempre inicia no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <div className="projects-page">
        {/* ── Header com botão de voltar ── */}
        <header className="projects-page__header">
          <button
            className="projects-page__back-btn"
            onClick={() => navigate('/')}
            aria-label="Voltar para o início"
            title="Voltar"
          >
            <i className="bx bx-arrow-back" aria-hidden="true" />
          </button>

          <div className="projects-page__title-group">
            <h1 className="projects-page__title">Projetos</h1>
            <p className="projects-page__subtitle">
              {projectsData.length} projetos no total
            </p>
          </div>
        </header>

        {/* ── Grid de todos os projetos ── */}
        <main className="projects-page__main container">
          <div className="projects-page__grid">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="projects-page__card-wrapper"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;
