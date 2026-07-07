import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

/**
 * ProjectCard — Componente reutilizável de card de projeto.
 * Utilizado na seção de destaques da Home e na página /projects.
 *
 * @param {{ project: import('../../data/projects').Project }} props
 */
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="project-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do projeto ${project.title}`}
    >
      <div className="project-card__img-wrapper">
        <img
          src={project.coverImage}
          alt={`Capa do projeto ${project.title}`}
          className="project-card__img"
          loading="lazy"
        />
        <div className="project-card__overlay">
          <span className="project-card__cta">Ver projeto →</span>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <div className="project-card__stacks">
          {project.stacks.slice(0, 3).map((stack) => (
            <span key={stack} className="project-card__stack-tag">
              {stack}
            </span>
          ))}
          {project.stacks.length > 3 && (
            <span className="project-card__stack-tag project-card__stack-tag--more">
              +{project.stacks.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
