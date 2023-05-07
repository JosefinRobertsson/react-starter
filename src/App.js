import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Endpoints from './components/Endpoints';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/endpoints" element={<Endpoints />} />
      </Routes>
    </BrowserRouter>
  );
};
