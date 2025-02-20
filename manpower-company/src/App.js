import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import GroupPage from './pages/GroupPage';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import AttestationPage from './pages/services/AttestationPage';
import ProcessPage from './pages/services/ProcessPage';
import RecruitmentServicesPage from './pages/services/RecruitmentServicesPage';
import SpecializationPage from './pages/services/SpecializationPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/recruitment" element={<RecruitmentServicesPage />} />
        <Route path="/services/attestation" element={<AttestationPage />} />
        <Route path="/services/process" element={<ProcessPage />} />
        <Route path="/services/specialization" element={<SpecializationPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        {/* <Route path="/enquiry" element={<div>Enquiry Page</div>} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 