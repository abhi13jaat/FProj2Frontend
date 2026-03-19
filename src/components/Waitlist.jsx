import React, { useState } from 'react';

const Waitlist = () => {
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

  const handleSubmit = async () => {
    if (!formData.firstName) { alert('Please enter your first name.'); return; }
    if (!formData.email || !formData.email.includes('@')) { alert('Please enter a valid email address.'); return; }

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
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert(data.message || 'Something went wrong. Please try again later.');
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
      <div className="waitlist-card reveal visible">
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
              <button className="submit-btn" onClick={handleSubmit} disabled={isSubmitting}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                {isSubmitting ? 'Submitting...' : 'Secure My Spot & Claim Free Bonuses'}
              </button>
            </div>

            <div className="waitlist-perks">
              <span className="wp"><span className="wp-dot"></span>Free to join</span>
              <span className="wp"><span className="wp-dot"></span>No credit card needed</span>
              <span className="wp"><span className="wp-dot"></span>Unsubscribe anytime</span>
              <span className="wp"><span className="wp-dot"></span>21 freebies instantly</span>
              <span className="wp"><span className="wp-dot"></span>$5,000 goal = all 3 courses launch</span>
            </div>
          </div>
        ) : (
          <div className="success-state" style={{ display: 'block' }}>
            <div className="success-icon">🎉</div>
            <h3>You're on the list!</h3>
            <p>Check your inbox — your 21 free resources are on their way. We'll notify you the moment we hit our <strong style={{color:'var(--amber)'}}>$5,000 USD goal</strong> and launch with your exclusive early backer pricing.</p>
            <div style={{marginTop:'1.5rem', display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap'}}>
              <span className="tag tag-v">🤖 AI Agents bonuses ✓</span>
              <span className="tag tag-e">🛒 Ecommerce bonuses ✓</span>
              <span className="tag tag-a">🎬 Video bonuses ✓</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Waitlist;
