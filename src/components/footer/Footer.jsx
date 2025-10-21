import React from 'react'
import './footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vinícius</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.instagram.com/viniipp" 
                    className="footer__social-link" 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                    <i className="uil uil-instagram"></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/vinicius-pereira-polli17" 
                    className="footer__social-link" 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                    <i className="uil uil-linkedin"></i>
                </a>

                <a 
                    href="https://www.github.com/ViniiPP" 
                    className="footer__social-link" 
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Vinícius Pereira Polli. Todos os direitos reservados {currentYear}.</span>
        </div>
    </footer>
  )
}