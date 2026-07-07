import React, { useEffect } from 'react';
import './scrollup.css'

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (scrollUp) {
                if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
                else scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollToTop} className="scrollup" aria-label="Voltar ao topo">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  )
}

export default ScrollUp