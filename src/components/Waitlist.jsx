import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Waitlist = () => {
  const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    courseInterest: '',
    tierInterest: '',
    domains: {
      ai: false,
      ec: false,
      vid: false,
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const key = id.replace('int-', '');
      setFormData(prev => ({
        ...prev,
        domains: { ...prev.domains, [key]: checked }
      }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleShowPaypal = () => {
    if (!formData.firstName) { alert('Please enter your first name.'); return; }
    if (!formData.email || !formData.email.includes('@')) { alert('Please enter a valid email address.'); return; }
    if (!formData.tierInterest) { alert('Please select a backer tier to proceed.'); return; }

    setShowPaypal(true);
  };

  const handleCreateOrder = async () => {
    try {
      const res = await fetch(`${API}/api/payments/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: formData.tierInterest })
      });
      const data = await res.json();
      return data.id;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleApprove = async (data, actions) => {
    setIsSubmitting(true);
    
    // Transform domains object to array
    const selectedDomains = Object.keys(formData.domains).filter(k => formData.domains[k]);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      courseInterest: formData.courseInterest,
      tierInterest: formData.tierInterest,
      domains: selectedDomains
    };

    try {
      const res = await fetch(`${API}/api/waitlist/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderID: data.orderID,
          waitlistData: payload
        })
      });
      
      const captureData = await res.json().catch(() => ({}));
      
      if (res.ok && captureData.success) {
        setIsSuccess(true);
      } else {
        alert(captureData.message || captureData.error || 'Payment capture failed. Try again.');
      }
    } catch (err) {
      console.error('Waitlist submit error', err);
      alert('Network error. Check if the server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist" id="waitlist">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center px-4">
        
        {/* Profile Card */}
        <div className="w-full md:w-[300px] shrink-0 bg-[var(--surface2)] border border-[var(--border)] rounded-2xl p-6 shadow-xl flex flex-col items-center text-center reveal visible relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 pointer-events-none"></div>
          <img 
  src="https://res.cloudinary.com/dht9fggz9/image/upload/v1774030584/deleteImage_ty5sbg.jpg"
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = "https://ui-avatars.com/api/?name=Nalla+Ashok+Vardhan&background=3b82f6&color=fff&size=200";
  }}
  alt="Nalla Ashok Vardhan"
  className="w-20 h-20 rounded-full object-cover mb-4 border-[3px] border-[var(--surface)] shadow-md relative z-10"
/>
          <h3 className="text-[var(--text)] font-bold text-lg mb-1">Nalla Ashok Vardhan</h3>
          <p className="text-[var(--muted)] text-sm mb-4">Senior Frontend + UI/UX Engineer</p>
          <a 
            href="https://www.linkedin.com/in/nashokvardhan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-400 hover:underline text-sm inline-flex items-center gap-1.5 transition-colors font-medium bg-blue-500/10 px-4 py-2 rounded-full"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Waitlist Form Card */}
        <div className="waitlist-card reveal visible !m-0 w-full md:flex-1">
        {!isSuccess ? (
          <div id="form-state">
            <h2>Join the <em>Waiting List</em></h2>
            <p>Secure your early backer spot. Claim all 21 freebies instantly. Be first notified when we hit our <strong style={{color:'var(--amber)'}}>$5,000 USD goal</strong> and launch.</p>

            <div className="form-group">
              <div className="form-row">
                <div className="form-field">
                  <label>First Name</label>
                  <input type="text" id="firstName" placeholder="Your first name" value={formData.firstName} onChange={handleChange}/>
                </div>
                <div className="form-field">
                  <label>Last Name</label>
                  <input type="text" id="lastName" placeholder="Your last name" value={formData.lastName} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-field">
                <label>Email Address</label>
                <input type="email" id="email" placeholder="you@email.com" value={formData.email} onChange={handleChange}/>
              </div>
              <div className="form-field">
                <label>Which course interests you most?</label>
                <select id="courseInterest" value={formData.courseInterest} onChange={handleChange}>
                  <option value="">Select a course…</option>
                  <option value="ai">AI Agents Mastery</option>
                  <option value="ecom">Ecommerce Mastery &amp; DFY Stores</option>
                  <option value="video">AI Video Creation Mastery</option>
                  <option value="all">All Three — Bundle Deal</option>
                </select>
              </div>
              <div className="form-field">
                <label>Which backer tier are you interested in?</label>
                <select id="tierInterest" value={formData.tierInterest} onChange={handleChange}>
                  <option value="">Select a tier…</option>
                  <option value="supporter">Supporter — $29 (1 course)</option>
                  <option value="champion">Champion — $79 (all 3 courses) ★ Most Popular</option>
                  <option value="founder">Founder — $149 (coaching included)</option>
                  <option value="vip">VIP Partner — $297 (maximum value)</option>
                </select>
              </div>
              <div className="form-field">
                <label>Select all domains that interest you</label>
                <div className="interest-grid">
                  <div>
                    <input type="checkbox" className="interest-item" id="int-ai" checked={formData.domains.ai} onChange={handleChange}/>
                    <label className="interest-label" htmlFor="int-ai"><span className="il-dot" style={{background:'var(--violet)'}}></span>AI Agents</label>
                  </div>
                  <div>
                    <input type="checkbox" className="interest-item" id="int-ec" checked={formData.domains.ec} onChange={handleChange}/>
                    <label className="interest-label" htmlFor="int-ec"><span className="il-dot" style={{background:'var(--emerald)'}}></span>Ecommerce</label>
                  </div>
                  <div>
                    <input type="checkbox" className="interest-item" id="int-vid" checked={formData.domains.vid} onChange={handleChange}/>
                    <label className="interest-label" htmlFor="int-vid"><span className="il-dot" style={{background:'var(--amber)'}}></span>AI Video</label>
                  </div>
                </div>
              </div>
              {!showPaypal ? (
                <button className="submit-btn" onClick={handleShowPaypal} disabled={isSubmitting}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                  {isSubmitting ? 'Submitting...' : 'Secure My Spot & Claim Free Bonuses'}
                </button>
              ) : (
                <div style={{ marginTop: '1.5rem' }}>
                  <PayPalButtons 
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    style={{ layout: "vertical", color: "blue", shape: "pill", label: "checkout" }}
                  />
                  <button 
                    style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontSize: '13px', display: 'block', margin: '15px auto 0', textDecoration: 'underline' }}
                    onClick={() => setShowPaypal(false)}
                  >
                    Change my details
                  </button>
                </div>
              )}
            </div>

            <div className="waitlist-perks">
              <span className="wp"><span className="wp-dot"></span>Unsubscribe anytime</span>
              <span className="wp"><span className="wp-dot"></span>21 freebies instantly</span>
              <span className="wp"><span className="wp-dot"></span>$5,000 goal = all 3 courses launch</span>
            </div>
          </div>
        ) : (
          <div className="success-state" style={{ display: 'block' }}>
            <div className="success-icon">🎉</div>
            <h3>You're officially an early backer!</h3>
            <p>Your payment was successful. Check your inbox — your 21 free resources and receipt are on their way. We'll notify you the moment we hit our <strong style={{color:'var(--amber)'}}>$5,000 USD goal</strong> and launch!</p>
            <div style={{marginTop:'1.5rem', display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap'}}>
              <span className="tag tag-v">🤖 AI Agents bonuses ✓</span>
              <span className="tag tag-e">🛒 Ecommerce bonuses ✓</span>
              <span className="tag tag-a">🎬 Video bonuses ✓</span>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
