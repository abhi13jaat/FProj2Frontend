import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const BuyButton = ({ tier, priceLabel }) => {
  const [showPaypal, setShowPaypal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    if (!name || !email) {
      alert("Please provide your name and email before checking out.");
      return null;
    }
    try {
      const res = await fetch('http://localhost:3000/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier })
      });
      const data = await res.json();
      return data.id; // Return order ID to PayPal
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleApprove = async (data, actions) => {
    try {
      const res = await fetch('http://localhost:3000/api/payments/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderID: data.orderID,
          name: name,
          email: email,
          tier: tier
        })
      });
      const captureData = await res.json();
      if (res.ok) {
        // Redirection on payment success
        navigate('/success', { state: { orderId: captureData.id } });
      } else {
        alert("Payment failed: " + captureData.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error capturing payment.");
    }
  };

  if (!showPaypal) {
    return (
      <button 
        className={tier === 'champion' ? "tier-btn tbtn-featured" : "tier-btn tbtn-default"} 
        onClick={() => setShowPaypal(true)}
      >
        Back This Tier — ${priceLabel}
      </button>
    );
  }

  return (
    <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '4px', marginBottom: '8px', background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          style={{ width: '100%', padding: '8px', borderRadius: '4px', background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }}
        />
      </div>
      {(name && email) ? (
        <PayPalButtons 
          createOrder={handleCreateOrder}
          onApprove={handleApprove}
          style={{ layout: "vertical", color: "blue", shape: "pill", label: "pay" }}
        />
      ) : (
        <div style={{ fontSize: '13px', color: 'var(--amber)', textAlign: 'center' }}>
          Please enter Name and Email to proceed
        </div>
      )}
    </div>
  );
};

const Tiers = () => {
  return (
    <>
      <div className="section-header reveal visible">
        <p className="section-eyebrow">Reward-Based Crowdfunding</p>
        <h2>Back the World's Most<br/>Dedicated Tech Mentor.</h2>
        <p style={{fontSize:'1.15rem', fontWeight:500, color:'var(--text)', maxWidth:'640px', margin:'1rem auto 0', lineHeight:1.7}}>
          <strong style={{color:'var(--amber)'}}>Support the Best-In-Tech-Training-Mentor</strong> for Mutual Benefit of Career &amp; Financial Growth System Creation — with Direct Weekly Meetings and Full Time Personalised Support.
        </p>
        <p className="goal-note">🎯 Campaign Goal: $5,000 USD — Early backers get lifetime access + deep discounts + exclusive bonuses unavailable at retail price</p>
      </div>

      <section className="tiers reveal visible">
        <div className="tiers-inner">

          <div className="tiers-mentor-banner">
            <h3>Your Investment Fuels <em>Real, Full-Time Mentorship</em></h3>
            <p>Every dollar backed goes directly into building world-class training infrastructure, live weekly support sessions, DFY course materials, and a thriving community of future-forward tech entrepreneurs. This is not just a course — it's a career transformation system.</p>
            <div className="goal-pill">🎯 Help raise $5,000 USD · Back early · Get rewarded for life</div>
          </div>

          <p className="backer-label">Choose Your Backer Tier — <em>All include early backer pricing unavailable at launch</em></p>

          <div className="tiers-grid">
            <div className="tier-card">
              <div className="tier-name">Supporter</div>
              <div className="tier-price">$29 <span>/ one-time</span></div>
              <div className="tier-desc">Perfect entry point. Back one course of your choice and start your journey.</div>
              <ul className="tier-perks">
                <li><span className="ck">✓</span>Access to 1 course of your choice</li>
                <li><span className="ck">✓</span>All 7 freebies for that domain</li>
                <li><span className="ck">✓</span>Private community access</li>
                <li><span className="ck">✓</span>Early backer badge &amp; recognition</li>
              </ul>
              <BuyButton tier="supporter" priceLabel="29" />
            </div>

            <div className="tier-card featured">
              <div className="tier-popular">Most Popular — Best Value</div>
              <div className="tier-name">Champion</div>
              <div className="tier-price">$79 <span>/ one-time</span></div>
              <div className="tier-desc">All 3 courses + the complete freebie bundle + lifetime updates.</div>
              <ul className="tier-perks">
                <li><span className="ck">✓</span>Access to ALL 3 courses</li>
                <li><span className="ck">✓</span>All 21 freebies ($611+ value)</li>
                <li><span className="ck">✓</span>Priority community + live Q&amp;As</li>
                <li><span className="ck">✓</span>Lifetime updates included</li>
                <li><span className="ck">✓</span>Certificate of completion</li>
              </ul>
              <BuyButton tier="champion" priceLabel="79" />
            </div>

            <div className="tier-card">
              <div className="tier-name">Founder</div>
              <div className="tier-price">$149 <span>/ one-time</span></div>
              <div className="tier-desc">Everything plus 1-on-1 mentoring sessions for deep transformation.</div>
              <ul className="tier-perks">
                <li><span className="ck">✓</span>Everything in Champion</li>
                <li><span className="ck">✓</span>2× 1-on-1 coaching calls (60 min)</li>
                <li><span className="ck">✓</span>DFY store setup walkthrough</li>
                <li><span className="ck">✓</span>Founding member credits</li>
                <li><span className="ck">✓</span>Your name in the course credits</li>
              </ul>
              <BuyButton tier="founder" priceLabel="149" />
            </div>

            <div className="tier-card">
              <div className="tier-name">VIP Partner</div>
              <div className="tier-price">$297 <span>/ one-time</span></div>
              <div className="tier-desc">Maximum transformation — for serious entrepreneurs who want it all.</div>
              <ul className="tier-perks">
                <li><span className="ck">✓</span>Everything in Founder</li>
                <li><span className="ck">✓</span>6× coaching sessions</li>
                <li><span className="ck">✓</span>White-label rights on templates</li>
                <li><span className="ck">✓</span>Early access 2 weeks before launch</li>
                <li><span className="ck">✓</span>Revenue share referral program</li>
              </ul>
              <BuyButton tier="vip" priceLabel="297" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tiers;
