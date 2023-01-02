import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutPage from './pages/about';
import HowPage from './pages/how';
import CategoriesPage from './pages/categories';
import TestimonialsPage from './pages/testimonials';
import PageInProgress from './pages/inProgress'
import NavBar from './components/nav/Nav';
import BurgerMenu from './components/burger/BurgerMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BurgerMenu />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/how"} element={<HowPage />} />
          <Route path={"/categories"} element={<CategoriesPage />} />
          <Route path={"/testimonials"} element={<TestimonialsPage />} />
          <Route path={"/tbd"} element={<PageInProgress />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
