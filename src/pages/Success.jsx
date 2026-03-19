import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'NOT_FOUND';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="success-state" style={{ display: 'block', padding: '4rem 2rem', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--border)' }}>
        <div className="success-icon" style={{ width: '80px', height: '80px', fontSize: '40px', margin: '0 auto 1.5rem' }}>🎉</div>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Payment Successful</h3>
        <p style={{ fontSize: '1.2rem', color: 'var(--emerald)' }}>You can now use the product and access your materials!</p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface2)', borderRadius: '12px', textAlign: 'left', maxWidth: '400px', margin: '2rem auto' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>Transaction Reference:</p>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>{orderId}</p>
        </div>

        <p style={{ marginTop: '1.5rem' }}>
          We have sent a confirmation email to the address provided during checkout.
        </p>

        <Link to="/" style={{ display: 'inline-block', marginTop: '2rem', background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '100px', textDecoration: 'none', fontWeight: 500 }}>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Success;
