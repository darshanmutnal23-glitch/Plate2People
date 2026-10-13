export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-copy">
        <div className="eyebrow">About Plate2People</div>
        <h2>A movement towards less waste and stronger communities.</h2>
        <p>
          Good food should not go to waste when someone could benefit from it.
          We help food businesses plan better and make practical connections
          with community organisations.
        </p>
        <p>
          Our approach is simple: prevent avoidable surplus first, then
          coordinate safe and timely redistribution.
        </p>
        <a className="btn" href="#how">
          Learn How It Works
        </a>
      </div>

      <div className="about-cards">
        <article className="photo-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80"
            alt="Restaurant chef preparing food"
          />
          <div className="photo-label">
            <h3>For Restaurants</h3>
            <p>Plan smarter. Save resources. Make an impact.</p>
          </div>
        </article>

        <article className="photo-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80"
            alt="Volunteers preparing food donations"
          />
          <div className="photo-label">
            <h3>For NGOs</h3>
            <p>Coordinate safe surplus food collections.</p>
          </div>
        </article>

        <article className="photo-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=700&q=80"
            alt="Community volunteers working together"
          />
          <div className="photo-label">
            <h3>For Volunteers</h3>
            <p>Give your time to a practical local cause.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
