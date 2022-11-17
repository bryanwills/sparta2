import React from 'react';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggleButton';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
          <div className="bg-white dark:text-[#e3b151] text-[#080e18] dark:bg-[#080e18]">
            <div className="theme-toggle px-2 py-2 left-0  background-white font-Monsterrat object-right">
              <ThemeToggle />
            </div>
            <Navbar />
              <div className="block list-outside">
              <Header/>
              </div>
              <Highlights/>
              <div>
                <Footer />
              </div>
              <div className="">
              </div>
              <div>
              </div>
          </div>
        </>


  );
}

export default App;
