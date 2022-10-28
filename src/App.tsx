import React from 'react';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggleButton';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Apply from './components/Apply';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="theme-toggle px-2 py-2 left-0 dark:bg-black background-white lg:hidden xl:hidden 2xl:hidden font-Monsterrat">
       <ThemeToggle />
     </div>
     <Navbar />
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
