import React, { useState, useRef, useEffect, useCallback } from 'react';
import { projectsData } from './Data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const sectionRef = useRef(null);
    const showcaseRef = useRef(null);
    const dockRef = useRef(null);
    
    const imgRef = useRef(null);

    const activeProject = projectsData[activeIndex];
    const imagesList = activeProject.images || [activeProject.thumbnail];
    const hasMultipleImages = imagesList.length > 1;

    // Animação de Troca de Imagem (Apenas na miniatura)
    const changeImage = useCallback((newIndex) => {
        if (!imgRef.current) return;
        gsap.killTweensOf(imgRef.current); 

        gsap.to(imgRef.current, { 
            opacity: 0, 
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
                setCurrentImageIndex(newIndex);
            }
        });
    }, []);

    useEffect(() => {
        if (!imgRef.current) return;
        gsap.killTweensOf(imgRef.current); 

        gsap.to(imgRef.current, { 
            opacity: 1, 
            duration: 0.25, 
            ease: "power2.inOut",
            delay: 0.05 
        });
    }, [currentImageIndex]);

    const nextImage = (e) => {
        if(e) e.stopPropagation(); 
        const nextIdx = (currentImageIndex + 1) % imagesList.length;
        changeImage(nextIdx); 
    };

    const prevImage = (e) => {
        if(e) e.stopPropagation(); 
        const prevIdx = (currentImageIndex - 1 + imagesList.length) % imagesList.length;
        changeImage(prevIdx); 
    };

    // Animações de Scroll
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".projects-section-title", 
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
                }
            );

            gsap.fromTo(showcaseRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: showcaseRef.current, start: "top 90%" }
                }
            );

            gsap.fromTo(dockRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.2)",
                  scrollTrigger: { trigger: dockRef.current, start: "top 98%" }
                }
            );
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    // Efeito Suave ao Trocar de PROJETO (Dock)
    useEffect(() => {
        setCurrentImageIndex(0);

        gsap.fromTo(".showcase__content-fade", 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.4, delay: 0.1, ease: "power2.out" }
        );
    }, [activeIndex]);

    return (
        <section className="projects section" id="projects" ref={sectionRef}>
            <div className="projects-section-title">
                <h2 className="section__title">Projetos</h2>
                <span className="section__subtitle">Meus principais projetos</span>
            </div>

            <div className="projects__container container">
                <div className="projects__showcase" ref={showcaseRef}>
                    <div className="showcase__content-fade">
                        <div className="showcase__content-grid">

                            {/* Wrapper da imagem limpo (sem onClick de modal) */}
                            <div className="showcase__img-wrapper">
                                <img 
                                    ref={imgRef}
                                    src={imagesList[currentImageIndex]} 
                                    alt={`${activeProject.title} - imagem ${currentImageIndex + 1}`} 
                                    className="showcase__img"
                                />

                                {hasMultipleImages && (
                                    <>
                                        <button className="showcase__arrow showcase__arrow--prev" onClick={prevImage}>
                                            <i className="bx bx-chevron-left"></i>
                                        </button>
                                        <button className="showcase__arrow showcase__arrow--next" onClick={nextImage}>
                                            <i className="bx bx-chevron-right"></i>
                                        </button>
                                        
                                        <div className="showcase__paginator">
                                            {currentImageIndex + 1} / {imagesList.length}
                                        </div>
                                    </>
                                )}
                            </div>
                            
                            <div className="showcase__data">
                                <span className="showcase__category">{activeProject.category}</span>
                                <h3 className="showcase__title">{activeProject.title}</h3>
                                <p className="showcase__description">{activeProject.description}</p>
                                
                                <div className="showcase__links">
                                    <a href={activeProject.demo_link} className="button button--flex button--small" target="_blank" rel="noopener noreferrer">
                                        Demo <i className="bx bx-link-external button__icon"></i>
                                    </a>
                                    <a href={activeProject.github_link} className="button button--flex button--transparent button--small" target="_blank" rel="noopener noreferrer">
                                        GitHub <i className="bx bxl-github button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Dock de projetos */}
                <div className="projects__dock-wrapper" ref={dockRef}>
                    <div className="projects__dock">
                        {projectsData.map((item, index) => (
                            <div 
                                key={item.id} 
                                className={`dock__item ${index === activeIndex ? 'active-dock' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                title={item.title}
                            >
                                <img src={item.thumbnail} alt={item.title} />
                                {index === activeIndex && <div className="dock__indicator"></div>}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}