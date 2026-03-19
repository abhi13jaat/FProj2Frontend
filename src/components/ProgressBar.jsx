import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [percent, setPercent] = useState('0%');

  useEffect(() => {
    setTimeout(() => {
      setPercent('24.8%');
    }, 400);
  }, []);

  return (
    <div className="prog-wrap reveal visible">
      <div className="progress-section">
        <div className="prog-header">
          <div className="prog-title">🎯 Campaign Funding Progress — Goal: $5,000 USD</div>
          <div className="prog-pct">{percent}</div>
        </div>
        <div className="prog-bar"><div className="prog-fill" style={{ width: percent }}></div></div>
        <div className="prog-stats">
          <span><strong>$1,240 raised</strong> of $5,000 USD goal</span>
          <span style={{color:'var(--amber)'}}>$3,760 remaining — join us!</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
