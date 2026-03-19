import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Master<span>Future</span></div>
      <div className="nav-right">
        <span className="nav-goal">🎯 Goal: $5,000 USD</span>
        <button 
          className="nav-cta" 
          onClick={() => document.getElementById('waitlist').scrollIntoView({behavior:'smooth'})}
        >
          Join Waiting List
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
