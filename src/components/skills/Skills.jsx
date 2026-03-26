import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend  from './Backend';
import Mobile from './Mobile';
import QA from './QA';
import { ScrollReveal } from '../animations/ScrollReveal';

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <ScrollReveal direction='right' delay={0.5}>
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Minhas Habilidades</span>
      </ScrollReveal>

        <div className="skills__container container grid">
          <ScrollReveal direction='left' delay={0.3}>
            <Frontend />
          </ScrollReveal>

          <ScrollReveal direction='right' delay={0.3}>
            <Backend />
          </ScrollReveal>

          <ScrollReveal direction='left' delay={0.5}>
            <Mobile />
          </ScrollReveal>

          <ScrollReveal direction='right' delay={0.5}>
            <QA />
          </ScrollReveal>
        </div>
    </section>
  )
}
