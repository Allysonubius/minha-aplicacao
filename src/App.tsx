// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddItemPage from './pages/AddItemPage';
import UpdateItemPage from './pages/UpdateItemPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adicionar" element={<AddItemPage />} />
        <Route path="/editar/:id" element={<UpdateItemPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
