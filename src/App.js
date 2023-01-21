import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutPage from './pages/about';
import HowPage from './pages/how';
import CategoriesPage from './pages/categories';
import TestimonialsPage from './pages/testimonials';
import PageInProgress from './pages/inProgress'
import NavBar from './components/nav/Nav';
import BurgerMenu from './components/burger/BurgerMenu';
import Intro from './components/introBanner/Intro';
import Scroll from './components/scroll/Scroll';

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />} />
          <Route path={"/about"} element={<>
            <NavBar />
            <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            <Intro pageH2={"Who we are"} pageH1={"ABOUT US"} /><AboutPage burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></>} />
          <Route path={"/how"} element={<>
            <NavBar />
            <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            <Intro pageH2={"Customization"} pageH1={"HOW IT WORKS"} />
            <HowPage burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></>} />
          <Route path={"/categories"} element={<>
            <NavBar />
            <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            <Intro pageH2={"What we have "} pageH1={"CATEGORIES"} />
            <CategoriesPage burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></>} />
          <Route path={"/testimonials"} element={<>
            <NavBar />
            <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            <Intro pageH2={"What they say"} pageH1={"TESTIMONIALS"} />
            <TestimonialsPage burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></>} />
          <Route path={"/tbd"} element={<>
            <NavBar />
            <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            <PageInProgress /></>} />
        </Routes>
        <Scroll />
      </Router>

    </div>
  );
}

export default App;
