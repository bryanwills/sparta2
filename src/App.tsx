import React from 'react';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggleButton';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar />
     <div className="theme-toggle px-2 py-2 left-0 dark:bg-black lg:hidden xl:hidden 2xl:hidden">
       <ThemeToggle />
     </div>
     <div className="block list-outside">
       <Header />
     </div>
     <div>
        <Highlights />
     </div>
     <div>
       <Footer />
     </div>

    </>

  );
}

export default App;
