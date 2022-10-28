import React from 'react';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggleButton';
import Header from './components/Header';
import Home from './components/Home';
import Highlights from './components/Highlights';
import Apply from './components/Apply';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:text-[#e3b151] text-[#080e18] dark:bg-[#080e18]">
      <div className="theme-toggle px-2 py-2 left-0  background-white font-Monsterrat object-right">
       <ThemeToggle />
     </div>
     <Navbar />
     <Home />
     <br />
     <br />
     <div className="block list-outside">
       <Header />
     </div>
     <div>
        <Highlights />
     </div>
     <div>
      <Apply />
     </div>
     <div>
       <Footer />
     </div>

    </div>

  );
}

export default App;
