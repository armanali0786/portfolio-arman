import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import "./assets/css/responsive.css";

import Logo from "./assets/logo.png";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
function Navbar() {
  return (
    <header className="d2c_navbar sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg" id="d2c_main_nav">
          <a className="navbar-brand" href="/"><img src={Logo} className="w-100" alt="Logo" /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span><i className="fas fa-bars"></i></span>
          </button>

          <div className="collapse navbar-collapse js-clone-nav justify-content-end">
          <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link" activeClassName="active">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/project" className="nav-link" activeClassName="active">Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="btn d2c_nav_btn" activeClassName="active">Contact Me</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;

