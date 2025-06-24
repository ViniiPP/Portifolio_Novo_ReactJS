import React, { useState } from 'react';
import "./qualification.css";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualificações</h2>
        <span className="section__subtitle">Minha jornada pessoal</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                     Educação
                </div>

                <div 
                    className={toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                     Experiência
                </div>
            </div>

            {/* Data Qualifications */}
            <div className="qualification__sections">
                {/* Educação */}
                <div className={toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Ensino Médio - Empreendedorismo
                            </h3>
                            <span className="qualification__subtitle">
                                Colégio Estadual Sananduva
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                Ciência da Computação
                            </h3>
                            <span className="qualification__subtitle">
                                UPF
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 02/2023 - 01/2024
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Ciência da Computação
                            </h3>
                            <span className="qualification__subtitle">
                                Atitus Educação
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Presente
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                    </div>
                </div>
 
                {/* Experiencia */}
                <div className={toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Assistente de Loja</h3>
                            <span className="qualification__subtitle">Bizz Store</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 02/2023 - 05/2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Moderador</h3>
                            <span className="qualification__subtitle">Twitch</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 05/2021 - Presente
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Estágio em Qualidade de Software</h3>
                            <span className="qualification__subtitle">Compass UOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 11/2024 - 04/2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
