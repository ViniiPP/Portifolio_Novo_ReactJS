import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">3 anos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>

            <h3 className="about__title">Completado</h3>
            <span className="about__subtitle">+10 Projetos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-git-branch about__icon'></i>

            <h3 className="about__title">Área</h3>
            <span className="about__subtitle">Full Stack</span>
        </div>

    </div>
  )
}
