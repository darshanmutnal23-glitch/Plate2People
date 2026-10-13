import PartnerForm from "./PartnerForm";

export default function Partners() {
  return (
    <section className="section join" id="partners">
      <div>
        <div className="eyebrow">Join the movement</div>
        <h2>Let’s make surplus food count.</h2>
        <p>
          Whether you run a restaurant, manage a community organisation or want
          to volunteer, start a conversation with us.
        </p>
        <ul>
          <li>Restaurants and caterers</li>
          <li>Event venues and food businesses</li>
          <li>Registered NGOs and community kitchens</li>
          <li>Local volunteers and student groups</li>
        </ul>
        <p className="notice">
          Food safety comes first. Only suitable food handled and transported
          safely should be redistributed.
        </p>
      </div>

      <PartnerForm />
    </section>
  );
}
