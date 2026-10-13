export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="eyebrow">Good food deserves a second chance</div>
        <h1>
          Reduce Food Waste.
          <br />
          <span>Feed More Lives.</span>
        </h1>
        <p>
          Plate2People connects restaurants, caterers and event hosts with
          trusted community organisations to redirect safe surplus food where it
          can make a difference.
        </p>
        <div className="actions">
          <a className="btn" href="#contact">
            Partner Your Restaurant ↗
          </a>
          <a className="btn outline" href="#how">
            ▷ &nbsp; See How It Works
          </a>
        </div>
        <div className="trustline">
          <span>✓ Reduce waste</span>
          <span>₹ Save costs</span>
          <span>♡ Serve community</span>
          <span>✓ Build trust</span>
        </div>
      </div>

      <div className="hero-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85"
          alt="Chef working in a professional kitchen"
        />
        <div className="stat-card">
          <div style={{ fontSize: "2rem" }}>🍲</div>
          <div>
            <small>Our shared goal</small>
            <strong>Zero waste. More meals.</strong>
            <small>Start with one local partnership.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
