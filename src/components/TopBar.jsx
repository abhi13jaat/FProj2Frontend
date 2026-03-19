import React from 'react';

const TopBar = () => {
  return (
    <>
      <div className="top-bar">
        <strong>🚀 FULL TIME SUPPORT ON MORE COURSE LAUNCHES TO THE EARLY ENROLLED STARS</strong>
        &nbsp;·&nbsp;
        ALL THE BEST FOR YOUR FULL TIME TECH CAREER &amp; FINANCIAL FREEDOM
        &nbsp;·&nbsp;
        <span className="goal-badge">🎯 Funding Goal: $5,000 USD</span>
      </div>

      <div className="currency-bar">
        <div className="marquee-wrap">
          <div className="marquee-track" id="mq">
            <span className="cur-item"><span className="cur-sym c-usd">$</span><span>USD</span><span className="cur-name">US Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-eur">€</span><span>EUR</span><span className="cur-name">Euro</span></span>
            <span className="cur-item"><span className="cur-sym c-gbp">£</span><span>GBP</span><span className="cur-name">Pound</span></span>
            <span className="cur-item"><span className="cur-sym c-jpy">¥</span><span>JPY</span><span className="cur-name">Yen</span></span>
            <span className="cur-item"><span className="cur-sym c-inr">₹</span><span>INR</span><span className="cur-name">Rupee</span></span>
            <span className="cur-item"><span className="cur-sym c-cad">$</span><span>CAD</span><span className="cur-name">Can. Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-aud">$</span><span>AUD</span><span className="cur-name">Aus. Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-chf">₣</span><span>CHF</span><span className="cur-name">Swiss Franc</span></span>
            <span className="cur-item"><span className="cur-sym c-cny">¥</span><span>CNY</span><span className="cur-name">Yuan</span></span>
            <span className="cur-item"><span className="cur-sym c-sgd">$</span><span>SGD</span><span className="cur-name">S'pore Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-aed">د.إ</span><span>AED</span><span className="cur-name">UAE Dirham</span></span>
            <span className="cur-item"><span className="cur-sym c-krw">₩</span><span>KRW</span><span className="cur-name">Won</span></span>
            {/* Duplicate for infinite loop */}
            <span className="cur-item"><span className="cur-sym c-usd">$</span><span>USD</span><span className="cur-name">US Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-eur">€</span><span>EUR</span><span className="cur-name">Euro</span></span>
            <span className="cur-item"><span className="cur-sym c-gbp">£</span><span>GBP</span><span className="cur-name">Pound</span></span>
            <span className="cur-item"><span className="cur-sym c-jpy">¥</span><span>JPY</span><span className="cur-name">Yen</span></span>
            <span className="cur-item"><span className="cur-sym c-inr">₹</span><span>INR</span><span className="cur-name">Rupee</span></span>
            <span className="cur-item"><span className="cur-sym c-cad">$</span><span>CAD</span><span className="cur-name">Can. Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-aud">$</span><span>AUD</span><span className="cur-name">Aus. Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-chf">₣</span><span>CHF</span><span className="cur-name">Swiss Franc</span></span>
            <span className="cur-item"><span className="cur-sym c-cny">¥</span><span>CNY</span><span className="cur-name">Yuan</span></span>
            <span className="cur-item"><span className="cur-sym c-sgd">$</span><span>SGD</span><span className="cur-name">S'pore Dollar</span></span>
            <span className="cur-item"><span className="cur-sym c-aed">د.إ</span><span>AED</span><span className="cur-name">UAE Dirham</span></span>
            <span className="cur-item"><span className="cur-sym c-krw">₩</span><span>KRW</span><span className="cur-name">Won</span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
