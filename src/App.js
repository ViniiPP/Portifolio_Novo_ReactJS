import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Landing page — componentes existentes
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

// Páginas de projetos
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

const LandingPage = () => (
  <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/"               element={<LandingPage />} />
        <Route path="/projects"       element={<ProjectsPage />} />
        <Route path="/projects/:id"   element={<ProjectDetailPage />} />
      </Routes>
      <ScrollUp />
    </>
  );
}

export default App;

