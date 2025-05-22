import React from 'react';

import Hero from './components/Hero';
import NavLinks from './components/NavLinks';
import Contact from './components/Contact';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans h-screen overflow-hidden">
      {/* Cambiar a 40% y 60% */}
      <div className="grid grid-cols-[40%_60%] h-full">
        
        {/* Columna Izquierda (Hero + NavLinks + Contacto) */}
        <aside className="p-6 border-r border-gray-700 overflow-y-auto sticky top-0 h-screen block">
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <Hero />
              <NavLinks />
            </div>
            <Contact />
          </div>
        </aside>

        {/* Columna Derecha (Contenido principal) */}
        <div className="overflow-y-auto">
          <main className="p-8 max-w-5xl mx-auto space-y-16">
            <MainContent />
          </main>
        </div>

      </div>
    </div>
  );
}

export default App;
