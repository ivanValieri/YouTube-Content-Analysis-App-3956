import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ScriptGeneratorPage from './pages/ScriptGeneratorPage';
import TitleGeneratorPage from './pages/TitleGeneratorPage';
import TemplatesPage from './pages/TemplatesPage';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#f1f5f9',
              border: '1px solid #334155',
            },
          }}
        />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/script-generator" element={<ScriptGeneratorPage />} />
            <Route path="/title-generator" element={<TitleGeneratorPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;