import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Lift Services</h1>
        <p>Reliable and comfortable rides to your destination</p>
      </header>

      <section className="services">
        <h2>Our services:</h2>
        <div>
          <h3>Work Commute</h3>
          <p>
            Start your workday stress-free with a timely and comfortable ride to
            work
          </p>
        </div>
        <div>
          <h3>Aiport Transfers</h3>
          <p>
            Ensure a smooth ride to and from the airport for those times where
            bus and trains are not available.
          </p>
        </div>
      </section>
    </div>
  );
}
