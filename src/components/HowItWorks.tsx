export default function HowItWorks() {
  return (
    <section className="section steps" id="how">
      <div className="section-head">
        <div className="eyebrow">Simple steps, meaningful change</div>
        <h2>How Plate2People works</h2>
        <p>
          A practical process designed around food safety, clear communication
          and reliable local partnerships.
        </p>
      </div>

      <div className="step-grid">
        <article className="step">
          <div className="step-num">01 / PLAN</div>
          <h3>Prevent avoidable surplus</h3>
          <p>
            Restaurants review sales, stock and event bookings to improve
            purchasing and preparation decisions.
          </p>
        </article>

        <article className="step">
          <div className="step-num">02 / CONNECT</div>
          <h3>List safe surplus food</h3>
          <p>
            Partners share food type, quantity, pickup time and handling details
            with a local coordination team.
          </p>
        </article>

        <article className="step">
          <div className="step-num">03 / REDISTRIBUTE</div>
          <h3>Collect and report</h3>
          <p>
            Approved partners arrange timely pickup, follow food-safety
            practices and record the outcome.
          </p>
        </article>
      </div>
    </section>
  );
}
