import React, { useState } from 'react'
import './services.css'
import { ScrollReveal } from '../animations/ScrollReveal';

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <ScrollReveal direction='top' delay={0.2}>
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu ofereço</span>
        </ScrollReveal>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Desenvolvimento <br /> de Sites</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    Veja mais <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Desenvolvimento de Sites</h3>
                        <p className="services__modal-description">
                            Atuo há mais de 2 anos criando sites personalizados e otimizados, entregando soluções de qualidade 
                            para pessoas e projetos pessoais.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvo interfaces UX/UI para sites, priorizando design intuitivo e funcional.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Criação e desenvolvimento de sites responsivos e otimizados para diferentes dispositivos.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implementação de soluções personalizadas para atender às necessidades de cada projeto.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Realizo testes e validações (QA) para garantir a qualidade e desempenho dos sites.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="bx bx-palette services__icon"></i>
                    <h3 className="services__title">UX/UI <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">
                    Veja mais 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UX/UI Designer</h3>
                        <p className="services__modal-description">
                            Desenvolvo interfaces UX/UI sofisticadas e modernas para sites e aplicativos mobile, unindo funcionalidades 
                            e designs criativos. Utilizo ferramentas como Figma.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de interfaces UX/UI modernas para Android e IOS.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Criação de protótipos e wireframes no Figma para validação de ideias.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Aplicação de princípios de design para layouts visuais harmoniosos.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Testes de usabilidade para aprimorar a interação e acessibilidade.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="bx bxs-devices services__icon"></i>
                    <h3 className="services__title">Aplicativos Mobile <br/> (Android e IOS)</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    Veja mais 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Apps Mobile</h3>
                        <p className="services__modal-description">
                            Desenvolvo aplicativos mobile modernos e otimizados para Android e IOS. Unindo performance e design sofisticados.  
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de aplicativos mobile com React Native, garantindo alta performance.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Criação de soluções responsivas e otimizadas para celulares e tablets.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implementação de soluções alinhadas com as tendências atuais.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Realização de testes e melhorias para garantir uma experiência fluida e de alta qualidade.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}