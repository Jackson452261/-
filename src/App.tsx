import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Specifications from './components/Specifications';
import Footer from './components/Footer';
import FeaturesPage from './pages/FeaturesPage';
import ProductsPage from './pages/ProductsPage';
import SpecificationsPage from './pages/SpecificationsPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Service from './components/Service';
 

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Service />
            <Features />
            <Products />
            <Specifications />
          </>
        } />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/specifications" element={<SpecificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;