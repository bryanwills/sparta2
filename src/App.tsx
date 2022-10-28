import React from 'react';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggleButton';
import Header from './components/Header';

function App() {
  return (
    <>
     <Navbar />
     <div className="theme-toggle px-2 py-2 left-0 dark:bg-black">
       <ThemeToggle />
       <Header />
     </div>

    </>

  );
}

export default App;
