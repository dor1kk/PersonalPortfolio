import React from 'react';
import { Hero, Header, Skills, Projects, Footer, Contact } from './sections/Index';
import Services from './sections/Services';
import Education from './sections/About';

const App = () => (
  <main>
    <Header />

    <div className=''>
      <Hero />
    </div>
    <div className='py-16 px-16 bg-[#0f172a]'>
      <Services />
    </div>

    <div className='py-16 px-16 bg-[#0f172a]'>
      <Skills />
    </div>

    <div className=''>
      <Projects />
    </div>

    <div className='py-16 px-16 bg-[#0f172a] '>
      <Education />
    </div>

    <div className='bg-[#0f172a]'>
      <Contact />
    </div>
  </main>
);

export default App;
