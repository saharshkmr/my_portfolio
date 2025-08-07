import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import ScrollToTop from './components/Common/ScrollToTop';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

// Global styles
import './App.css';
import './styles/global.css';

// Fonts
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/projects/:id" element={
          <Layout>
            <ProjectDetails />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;
