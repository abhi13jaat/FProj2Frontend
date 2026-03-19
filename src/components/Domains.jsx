import React from 'react';

const Domains = () => {
  return (
    <>
      <div className="section-header reveal visible">
        <p className="section-eyebrow">What You're Backing</p>
        <h2>Three Courses.<br/>One Future.</h2>
        <p>Each course is a standalone mastery program — or back all three at a special bundle rate when we hit our $5,000 goal.</p>
        <p className="goal-note">🎯 $5,000 USD raised = all 3 courses launch at once</p>
      </div>

      <section className="domains reveal visible">
        <div className="domain-grid">
          <div className="domain-card v">
            <div className="domain-icon-wrap icon-v">🤖</div>
            <p className="domain-num">Course 01</p>
            <h3>AI Agents Mastery</h3>
            <p>From zero to building autonomous AI agents that work for you 24/7 — generate income, automate workflows, and outpace your competition.</p>
            <ul className="domain-features">
              <li>Build AI agents with LangChain, CrewAI &amp; AutoGPT</li>
              <li>No-code &amp; low-code agent frameworks</li>
              <li>Monetise agents as freelancer or SaaS founder</li>
              <li>Automation workflows for real business outcomes</li>
              <li>Live project: Deploy your first income-generating agent</li>
            </ul>
            <span className="domain-badge badge-v">Beginner → Advanced</span>
          </div>
          <div className="domain-card e">
            <div className="domain-icon-wrap icon-e">🛒</div>
            <p className="domain-num">Course 02</p>
            <h3>Ecommerce Mastery &amp; DFY Stores</h3>
            <p>Launch a fully done-for-you ecommerce store and master the systems that scale it to consistent monthly income — without building from scratch.</p>
            <ul className="domain-features">
              <li>DFY Shopify &amp; WooCommerce store setup</li>
              <li>Winning product research with AI tools</li>
              <li>Meta &amp; TikTok ads that convert from day one</li>
              <li>Email automations for passive recurring revenue</li>
              <li>Live store audit + scaling roadmap</li>
            </ul>
            <span className="domain-badge badge-e">DFY + Self-Paced</span>
          </div>
          <div className="domain-card a">
            <div className="domain-icon-wrap icon-a">🎬</div>
            <p className="domain-num">Course 03</p>
            <h3>AI Video Creation Mastery</h3>
            <p>Create scroll-stopping, faceless AI-powered videos for YouTube, Reels, TikTok and client projects — without showing your face or owning expensive gear.</p>
            <ul className="domain-features">
              <li>Text-to-video, avatar &amp; voiceover AI pipelines</li>
              <li>Faceless YouTube channel launch playbook</li>
              <li>Viral short-form content formula (Reels/Shorts)</li>
              <li>Monetise through ads, UGC &amp; content agencies</li>
              <li>Full $0 production stack — free tools only</li>
            </ul>
            <span className="domain-badge badge-a">Faceless &amp; AI-Powered</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;
