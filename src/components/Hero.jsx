import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [fundedCount, setFundedCount] = useState(0);

  useEffect(() => {
    // Simple counter animation
    const animateCounter = (setter, target, duration) => {
      let step = target / 60;
      let current = 0;
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        setter(Math.round(current));
        if (current >= target) clearInterval(interval);
      }, duration / 60);
    };

    setTimeout(() => {
      animateCounter(setWaitlistCount, 247, 1500);
      animateCounter(setFundedCount, 1240, 1800);
    }, 600);
  }, []);

  return (
    <section className="hero">
      <div className="hero-orb orb1"></div>
      <div className="hero-orb orb2"></div>
      <div className="hero-orb orb3"></div>

      <div className="hero-eyebrow reveal visible">
        <span className="dot"></span>
        Crowdfunding Campaign — Now Live · Goal $5,000 USD
      </div>

      <h1 className="reveal visible">
        <span className="line1">Master the Skills That</span>
        <span className="line2"><em>Print Money in 2025</em></span>
      </h1>

      <p className="hero-sub reveal visible">
        Three power-packed training programs launching soon — AI Agents, Ecommerce Mastery &amp; DFY Stores, and AI Video Creation. Back the launch. Get rewarded. Change your career forever.
      </p>

      <div className="hero-goal-pill reveal visible">
        🎯 Crowdfunding Goal: $5,000 USD — Every backer brings us closer to launch
      </div>

      <div className="hero-tags reveal visible">
        <span className="tag tag-v">🤖 AI Agents Mastery</span>
        <span className="tag tag-e">🛒 Ecommerce &amp; DFY Stores</span>
        <span className="tag tag-a">🎬 AI Video Creation</span>
      </div>

      <div className="hero-cta-wrap reveal visible">
        <button className="btn-primary" onClick={() => document.getElementById('waitlist').scrollIntoView({behavior:'smooth'})}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          Join the Waiting List — Get $611+ Free
        </button>
        <p className="hero-note">Free to join · Zero spam · Exclusive early backer pricing at launch</p>
      </div>

      <div className="counter-row reveal visible">
        <div className="counter">
          <div className="counter-num">{waitlistCount}</div>
          <div className="counter-label">Waiting List</div>
        </div>
        <div className="counter">
          <div className="counter-num">3</div>
          <div className="counter-label">Courses Launching</div>
        </div>
        <div className="counter">
          <div className="counter-num">${fundedCount.toLocaleString()}</div>
          <div className="counter-label">Funded So Far</div>
        </div>
        <div className="counter">
          <div className="counter-num">21</div>
          <div className="counter-label">Free Bonuses</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
