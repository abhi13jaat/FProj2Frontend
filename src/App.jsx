import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import MissionBanner from './components/MissionBanner';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Freebies from './components/Freebies';
import Tiers from './components/Tiers';
import ProgressBar from './components/ProgressBar';
import Waitlist from './components/Waitlist';
import Success from './pages/Success';

const LandingPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <MissionBanner />
      <Hero />
      <div className="divider"></div>
      <Domains />
      <div className="divider"></div>
      <Freebies />
      <div className="divider"></div>
      <Tiers />
      <ProgressBar />
      <Waitlist />
      
      <footer>
        <p>© 2025 MasterFuture Training — Reward-Based Crowdfunding Campaign<br/>
        Built with purpose. Powered by <span>AI</span>. Backed by a community of future-forward learners.</p>
        <p className="footer-goal">🎯 Crowdfunding Target: $5,000 USD — Support the Best-In-Tech Mentor for Mutual Career &amp; Financial Growth</p>
        <p className="footer-tagline">✅ Full Time Support · Weekly Live Meetings · DFY Implementation · Early Enrolled Stars Get Priority Access</p>
      </footer>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
