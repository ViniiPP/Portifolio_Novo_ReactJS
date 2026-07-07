import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './projects.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects — Seção de destaques da Home.
 * Exibe apenas os projetos com isFeatured === true.
 */
export const Projects = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const featuredProjects = projectsData.filter((p) => p.isFeatured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-section-title',
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.projects-featured__grid .project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.projects-featured__grid', start: 'top 88%' },
        }
      );

      gsap.fromTo(
        '.projects-featured__cta-btn',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.projects-featured__cta-btn', start: 'top 95%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="projects-section-title">
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Meus principais projetos</span>
      </div>

      <div className="container">
        <div className="projects-featured__grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-featured__cta">
          <button
            className="projects-featured__cta-btn"
            onClick={() => navigate('/projects')}
            aria-label="Ver todos os projetos"
          >
            Veja todos os projetos
            <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};