import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import AnimatedCursor from './components/AnimatedCursor';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/HeroNew';
import About from './sections/AboutNew';
import Skills from './sections/SkillsNew';
import Experience from './sections/ExperienceNew';
import Projects from './sections/ProjectsNew';
import Resume from './sections/ResumeFuturistic';
import Contact from './sections/ContactNew';

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <LoadingScreen />
        <AnimatedCursor />
        <Navigation />

        <main className="pt-16 relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <ScrollToTop />

        {/* Enhanced background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none -z-10" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-purple-500/5 pointer-events-none -z-10" />
      </div>
    </ThemeProvider>
  );
};

export default App;
