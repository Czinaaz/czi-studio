import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import NavBar from "components/Header/NavBar";
import Projects from "pages/Projects/Projects";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";
import Footer from "components/Footer/Footer";


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
      <Footer/>
    </>
  );
};



