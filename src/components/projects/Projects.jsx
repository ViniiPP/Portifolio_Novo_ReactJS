import React, { useEffect, useState, useRef  } from 'react';
import { projectsData, projectsNav } from './Data';
import { WorkItems } from './WorkItems';
import "./projects.css";

export const Projects = () => {
    const [item, setItem] = useState({ name: 'Todos' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'Todos') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.split('/').includes(item.name);
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Meus trabalhos recentes</span>

        <div className="projects__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span
                        onClick={(e) => {
                            handleClick(e, index);
                        }}
                        className={`${active === index ? 'active-work' : ''} projects__item`}
                        key={index}
                        >
                        {item.name}
                    </span>
                )
            })}
        </div>

        <div className="projects__container container grid">
            {/* O WorkItems agora gerencia tudo sozinho, o pai não precisa se preocupar */}
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id}/>
            })}
        </div>
    </section>
  )
}