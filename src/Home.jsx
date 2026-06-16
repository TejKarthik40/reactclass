import "./Home.css";
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://zerodha.com/static/images/landing.svg"
          alt="landing"
        />

        <h1>Invest in Everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <button className="signup-btn">Sign Up Now</button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="card">
          <h3>📈 Stocks</h3>
          <p>Invest in top companies and grow your wealth.</p>
        </div>

        <div className="card">
          <h3>💰 Mutual Funds</h3>
          <p>Start SIPs and build long-term investments.</p>
        </div>

        <div className="card">
          <h3>📊 ETFs</h3>
          <p>Diversified investment options with low costs.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>10M+</h2>
          <p>Users</p>
        </div>

        <div>
          <h2>₹5L Cr+</h2>
          <p>Assets Managed</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Investment Options</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta">
        <h2>Start Your Investment Journey Today</h2>
        <button className="signup-btn">Get Started</button>
      </section>
    </>
  );
}

export default Home;