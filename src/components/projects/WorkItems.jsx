import React, { useState, useEffect, useRef } from 'react';

export const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setToggleState(!toggleState);
        if (!toggleState) {
            setCurrentImageIndex(0);
        }
    }

    const nextImage = (e) => {
        e.stopPropagation(); 
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length);
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!toggleState || (modalRef.current && modalRef.current.contains(event.target))) {
                return;
            }
            toggleModal();
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [toggleState, toggleModal]);

  return (
    <div className="projects__card" key={item.id}>
        <div className="projects__img-wrapper">
            <img src={item.thumbnail} alt={item.title} className="projects__img" />
        </div>
        
        <h3 className="projects__title">{item.title}</h3>

        <span className="projects__button" onClick={toggleModal}>
            Veja mais <i className="bx bx-right-arrow-alt projects__button-icon"></i>
        </span>

        <div className={toggleState ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content" ref={modalRef}>
                <i onClick={toggleModal} className="uil uil-times projects__modal-close"></i>

                {/* --- MUDANÇA PRINCIPAL AQUI --- */}
                <div className="projects__modal-gallery">
                    <div 
                        className="projects__modal-gallery-strip" 
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {item.images.map((imgSrc, index) => (
                            <img 
                                src={imgSrc} 
                                key={index} 
                                alt={`Imagem ${index + 1} do projeto ${item.title}`} 
                                className="projects__modal-img" 
                            />
                        ))}
                    </div>
                    
                    {item.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="projects__modal-gallery-button prev">&#10094;</button>
                            <button onClick={nextImage} className="projects__modal-gallery-button next">&#10095;</button>
                        </>
                    )}
                </div>
                {/* --- FIM DA MUDANÇA --- */}

                <h3 className="projects__modal-title">{item.title}</h3>
                <p className="projects__modal-description">{item.description}</p>

                <div className="projects__modal-links">
                    <a href={item.demo_link} className="projects__modal-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bx-link-external"></i> Demo
                    </a>
                    <a href={item.github_link} className="projects__modal-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}