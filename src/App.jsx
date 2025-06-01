import React from 'react';
import Hero from './components/Hero';
import NavLinks from './components/NavLinks';
import Contact from './components/Contact';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[40%_60%] h-full ">
        
        {/* Columna Izquierda (fija) */}
        <aside className="p-6 sticky top-0 h-screen shadow-lg shadow-green-900/20 overflow-x-hidden bg-[#0D3745] ">
          <div className="flex flex-col justify-between h-full ">
            <div className="space-y-6 ">
              <Hero />
              <NavLinks />
            </div>
            <Contact />
          </div>
        </aside>

        {/* Columna Derecha (scrollable) */}
      <div className="overflow-y-auto h-full  text-black scrollbar-thin scrollbar-thumb-orange-700">
        
            <MainContent />
       
        </div>

      </div>
    </div>
  );
}

export default App;
