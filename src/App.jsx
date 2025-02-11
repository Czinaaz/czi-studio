import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Navigation from "components/Header/NavBar";
import NavBar from "components/Header/NavBar";
import Projects from "pages/Projects/Projects";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";

// const Home = lazy(() => import('./pages/Home/Home'));

export const App = () => {
  return (
    <>
      <NavBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/czi-studio/" element={<Home />} />
          <Route path="/czi-studio/projects" element={<Projects />} />
          <Route path="/czi-studio/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
};



